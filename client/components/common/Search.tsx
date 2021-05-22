import React from 'react';

interface Props {
  mode: string;
  search: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: React.MouseEvent) => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props> = ({
  mode,
  search,
  onChange,
  onSearch,
  onKeyPress,
}) => {
  return (
    <div className="search-with-select">
      <a
        href="#"
        className="mobile-search-toggle-btn mr-2"
        data-porto-toggle-class="open"
      >
        <i className="icons icon-magnifier text-color-dark text-color-hover-primary" />
      </a>

      <div className="search-form-wrapper input-group">
        <input
          className="form-control text-1"
          type="text"
          name="search"
          value={search}
          onChange={onChange}
          onKeyPress={onKeyPress}
          placeholder={`${mode} 검색`}
        />
        <span className="input-group-append">
          <button className="btn" onClick={onSearch}>
            <i className="icons icon-magnifier header-nav-top-icon text-color-dark" />
          </button>
        </span>
      </div>
    </div>
  );
};

export default Search;
