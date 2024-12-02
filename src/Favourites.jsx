import { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';

function Favourites() {
  const [Favs, setAnime] = useState([]); 
  const [search, setSearch] = useState(''); 
  const [newAnime, setNewAnime] = useState({ AniName: '', AniType: '' }); 
  const [editingAnime, setEditingAnime] = useState(null); 

  useEffect(() => {
    fetchAnime(); 
  }, []);

  const fetchAnime = async () => {
    try {
      const response = await axios.get('http://localhost:3000/Favs');
      setAnime(response.data);
    } catch (error) {
      console.error('Error fetching Anime:', error); 
    }
  };

  const handleSearch = (e) => {
    e.preventDefault(); 
    const filteredAnime = Favs.filter(
      (fav) =>
        fav.AniName.toLowerCase().includes(search.toLowerCase()) ||
        fav.AniType.toLowerCase().includes(search.toLowerCase())
    );
    setAnime(filteredAnime); 
  };

  const handleAddAnime = async () => {
    try {
      const response = await axios.post('http://localhost:3000/Favs', newAnime);
      setAnime([...Favs, response.data]);
      setNewAnime({ AniName: '', AniType: '' });
    } catch (error) {
      console.error('Error adding fav:', error);
    }
  };

  const handleDeleteAnime = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/Favs/${id}`);
      setAnime(Favs.filter((fav) => fav.id !== id)); 
    } catch (error) {
      console.error('Error deleting fav:', error); 
    }
  };

  const handleEditClick = (fav) => {
    setEditingAnime(fav); 
  };

  const handleUpdateAnime = async () => {
    if (editingAnime) {
      try {
        const response = await axios.put(
          `http://localhost:3000/Favs/${editingAnime.id}`,
          editingAnime
        );
        setAnime(
          Favs.map((fav) => (fav.id === editingAnime.id ? response.data : fav))
        );
        setEditingAnime(null); 
      } catch (error) {
        console.error('Error updating fav:', error); 
      }
    }
  };

  return (
    <div className="app">
      <nav className="header">
        <div className="logo">
          Favourite <span>Anime</span>
        </div>
        <div className="navbar">
          <form onSubmit={handleSearch}>
            <input
              type="search"
              placeholder="Search Anime"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </nav>

      <div className="container mt-4">
        <h3>Anime List</h3>
        <ul className="list-group">
          {Favs.map((fav) => (
            <li key={fav.id} className="list-group-item d-flex justify-content-between align-items-center">
              <span>{fav.AniName} - {fav.AniType}</span>
              <button className="delete" onClick={() => handleDeleteAnime(fav.id)}>
                Delete
              </button>
              <button className="edit" onClick={() => handleEditClick(fav)}>
                Edit
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-4">
          {editingAnime ? (
            <div>
              <h5>Edit Anime</h5>
              <input
                type="text"
                placeholder="Anime name"
                value={editingAnime.AniName}
                onChange={(e) => setEditingAnime({ ...editingAnime, AniName: e.target.value })}
              />
              <input
                type="text"
                placeholder="Anime Type"
                value={editingAnime.AniType}
                onChange={(e) => setEditingAnime({ ...editingAnime, AniType: e.target.value })}
              />
              <button onClick={handleUpdateAnime} id="updateEntry">
                Update Anime
              </button>
              <button onClick={() => setEditingAnime(null)} id="cancelEdit">
                Cancel
              </button>
            </div>
          ) : (
            <div>
              <h5>Add New Anime</h5>
              <input
                type="text"
                placeholder="Anime name"
                value={newAnime.AniName}
                onChange={(e) => setNewAnime({ ...newAnime, AniName: e.target.value })}
              />
              <input
                type="text"
                placeholder="Anime Type"
                value={newAnime.AniType}
                onChange={(e) => setNewAnime({ ...newAnime, AniType: e.target.value })}
              />
              <button onClick={handleAddAnime} id="submit">
                Add Anime
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Favourites;
