import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface SearchBarProps {
  username: string;
  onUsernameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  username,
  onUsernameChange,
  onSearch,
}) => {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        borderRadius: '10px',
        border: 'solid 1px #dddddd',
        width: '100%',
      }}
    >
      <input
        type="text"
        placeholder="Digite um usuário do GitHub"
        value={username}
        onChange={onUsernameChange}
        required
        style={{
          flex: 1,
          border: 'none',
          outline: 'none',
          fontWeight: 'bold',
          margin: '0 0.5rem',
        }}
      />

      <button
        onClick={onSearch}
        disabled={!username}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#007bff',
          border: 'none',
          borderRadius: '10px',
          width: '40px',
          height: '40px',
          cursor: 'pointer',
        }}
      >
        <SearchIcon style={{ color: '#fff' }} />
      </button>
    </div>
  );
};

export default SearchBar;
