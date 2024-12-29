import React from 'react';
import { Search } from 'lucide-react';

export const SearchBar = ({ onSearch, onFilterChange }) => {
  return (
    <div className="card p-4 mb-4">
      <div className="row g-3">
        <div className="col-md-9">
          <div className="input-group">
            <span className="input-group-text">
              <Search size={20} />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Buscar libros..."
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="col-md-3">
          <select
            className="form-select"
            onChange={(e) => onFilterChange(e.target.value)}
          >
            <option value="title">Título</option>
            <option value="author">Autor</option>
            <option value="isbn">ISBN</option>
            <option value="genre">Género</option>
          </select>
        </div>
      </div>
    </div>
  );
};