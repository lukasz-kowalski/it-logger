import React, { useState, useEffect, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { useDebounce } from "use-debounce";
import { searchLogs } from "../../actions/logActions";

const SearchBar: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>("");

  const [debouncedValue] = useDebounce(value, 500);

  useEffect(() => {
    dispatch(searchLogs(debouncedValue));
  }, [debouncedValue, dispatch]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <nav style={{ marginBottom: "30px" }} className="blue">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
              placeholder="Search logs..."
              onChange={handleChange}
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default SearchBar;
