import * as React from "react";
import { useDebounce } from "../hooks/useDebounce";

export default function App() {
  const [searchTerm, setSearchTerm] = React.useState<FormDataEntryValue | null>("js");
  const [results, setResults] = React.useState([]);
  const [isSearching, setIsSearching] = React.useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const handleChange = (e:React.ChangeEvent<HTMLInputElement >) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setSearchTerm(formData.get("search"));
    e.currentTarget.reset();
    e.currentTarget.focus();
  };

  React.useEffect(() => {
    const searchHN = async () => {
      let results:[] = [];
      setIsSearching(true);
      if (debouncedSearchTerm) {
        const data:[] = [];
        results = data || [];
      }

      setIsSearching(false);
      setResults(results);
    };

    searchHN();
  }, [debouncedSearchTerm]);

  return (
    <section>
      <header>
        <h1>useDebounce</h1>
        <form onSubmit={handleSubmit}>
          <input
            name="search"
            placeholder="Search HN"
            style={{ background: "var(--charcoal)" }}
            onChange={handleChange}
          />
          <button className="primary" disabled={isSearching} type="submit">
            {isSearching ? "..." : "Search"}
          </button>
        </form>
      </header>
    </section>
  );
}
