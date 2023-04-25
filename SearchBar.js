import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const history = useHistory();

  const handleSearch = () => {
    const params = new URLSearchParams();
    params.append('search', searchTerm);
    history.push(`?${params.toString()}`);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleInputChange} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
export default SearchBar;