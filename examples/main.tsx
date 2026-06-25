import React, { useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { Autocomplete } from "../src/Autocomplete/Autocomplete";

/**
 * Manual verification playground for the Autocomplete component.
 * Each section exercises a distinct feature path; open the console to watch the
 * onChange / onInputChange events while interacting.
 */

const FRUITS = [
  "Apple",
  "Apricot",
  "Banana",
  "Blueberry",
  "Cherry",
  "Date",
  "Grape",
  "Lemon",
  "Mango",
  "Orange",
  "Peach",
  "Pear",
  "Pineapple",
];

interface Country {
  code: string;
  name: string;
}
const COUNTRIES: Country[] = [
  { code: "vn", name: "Vietnam" },
  { code: "us", name: "United States" },
  { code: "jp", name: "Japan" },
  { code: "de", name: "Germany" },
  { code: "fr", name: "France" },
  { code: "br", name: "Brazil" },
];

function Section(props: {
  title: string;
  note?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      style={{
        marginBottom: 28,
        maxWidth: 360,
        paddingBottom: 16,
        borderBottom: "1px solid #eee",
      }}
    >
      <h3 style={{ margin: "0 0 4px", font: "600 13px sans-serif" }}>
        {props.title}
      </h3>
      {props.note && (
        <p
          style={{ margin: "0 0 8px", font: "12px sans-serif", color: "#888" }}
        >
          {props.note}
        </p>
      )}
      {props.children}
    </section>
  );
}

function BasicSingle() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <Section title="Single select" note={`value: ${JSON.stringify(value)}`}>
      <Autocomplete<string>
        options={FRUITS}
        value={value}
        onChange={(_e, v) => setValue(v as string | null)}
        placeholder="Pick a fruit…"
      />
    </Section>
  );
}

function FreeSoloSingle() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <Section
      title="Single + freeSolo"
      note={`value: ${JSON.stringify(value)} — type anything + Enter/blur`}
    >
      <Autocomplete<string>
        options={FRUITS}
        freeSolo
        value={value}
        onChange={(_e, v, reason) => {
          console.log("freeSolo change", v, reason);
          setValue(v as string | null);
        }}
        placeholder="Type or pick…"
      />
    </Section>
  );
}

function ObjectOptions() {
  const [value, setValue] = useState<Country | null>(null);
  return (
    <Section
      title="Object options + getOptionLabel"
      note={`value: ${value?.name ?? "null"}`}
    >
      <Autocomplete<Country>
        options={COUNTRIES}
        value={value}
        getOptionLabel={(o) => (typeof o === "string" ? o : o.name)}
        isOptionEqualToValue={(a, b) => a.code === b.code}
        onChange={(_e, v) => setValue(v as Country | null)}
        placeholder="Pick a country…"
      />
    </Section>
  );
}

function MultipleChips() {
  const [value, setValue] = useState<string[]>(["Apple"]);
  return (
    <Section title="Multiple (chips)" note={`value: ${JSON.stringify(value)}`}>
      <Autocomplete<string>
        options={FRUITS}
        multiple
        value={value}
        onChange={(_e, v) => setValue(v as string[])}
        placeholder="Add fruits…"
        limitTags={3}
      />
    </Section>
  );
}

function MultipleFreeSolo() {
  const [value, setValue] = useState<string[]>([]);
  return (
    <Section
      title="Multiple + freeSolo"
      note={`value: ${JSON.stringify(value)}`}
    >
      <Autocomplete<string>
        options={FRUITS}
        multiple
        freeSolo
        value={value}
        onChange={(_e, v) => setValue(v as string[])}
        placeholder="Add tags…"
      />
    </Section>
  );
}

function AsyncLoading() {
  const [value, setValue] = useState<string | null>(null);
  const [input, setInput] = useState("");
  const [options, setOptions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const onInputChange = (_e: unknown, next: string) => {
    setInput(next);
    if (timer.current) clearTimeout(timer.current);
    if (!next) {
      setOptions([]);
      return;
    }
    setLoading(true);
    timer.current = setTimeout(() => {
      setOptions(
        FRUITS.filter((f) => f.toLowerCase().includes(next.toLowerCase())),
      );
      setLoading(false);
    }, 600);
  };

  return (
    <Section
      title="Async / loading"
      note={`input: "${input}" loading: ${loading}`}
    >
      <Autocomplete<string>
        options={options}
        loading={loading}
        value={value}
        inputValue={input}
        onInputChange={onInputChange}
        onChange={(_e, v) => setValue(v as string | null)}
        // server already filtered → disable client filtering
        filterOptions={(opts) => opts}
        placeholder="Search (debounced 600ms)…"
        loadingText="Searching…"
        noOptionsText="No matches"
      />
    </Section>
  );
}

function Uncontrolled() {
  return (
    <Section
      title="Uncontrolled (defaultValue)"
      note="no value prop; logs onChange"
    >
      <Autocomplete<string>
        options={FRUITS}
        defaultValue="Banana"
        onChange={(_e, v, reason) =>
          console.log("uncontrolled change", v, reason)
        }
        placeholder="Uncontrolled…"
      />
    </Section>
  );
}

function Disabled() {
  return (
    <Section title="Disabled">
      <Autocomplete<string> options={FRUITS} disabled placeholder="Disabled…" />
    </Section>
  );
}

function App() {
  const sections = useMemo(
    () => [
      <BasicSingle key="single" />,
      <FreeSoloSingle key="freesolo" />,
      <ObjectOptions key="object" />,
      <MultipleChips key="multiple" />,
      <MultipleFreeSolo key="multifree" />,
      <AsyncLoading key="async" />,
      <Uncontrolled key="uncontrolled" />,
      <Disabled key="disabled" />,
    ],
    [],
  );

  return (
    <div style={{ padding: 32, font: "13px sans-serif" }}>
      <h1 style={{ font: "600 18px sans-serif" }}>Autocomplete Playground</h1>
      {sections}
    </div>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
