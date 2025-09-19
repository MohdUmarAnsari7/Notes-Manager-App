import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import NoteCard from '../components/NoteCard';
import NoteModal from '../components/NoteModal';
import api from '../services/api';
import { Note } from '../types';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingNote, setEditingNote] = useState<Note | null>(null);

  const fetchNotes = async () => {
    try {
      const response = await api.get('/notes');
      setNotes(response.data);
    } catch (error) {
      console.error('Failed to fetch notes:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleCreateNote = async (title: string, description: string) => {
    try {
      const response = await api.post('/notes', { title, description });
      setNotes([response.data.note, ...notes]);
      setIsModalOpen(false);
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to create note');
    }
  };

  const handleUpdateNote = async (id: string, title: string, description: string) => {
    try {
      const response = await api.put(`/notes/${id}`, { title, description });
      setNotes(notes.map(note => note._id === id ? response.data.note : note));
      setIsModalOpen(false);
      setEditingNote(null);
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to update note');
    }
  };

  const handleDeleteNote = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      try {
        await api.delete(`/notes/${id}`);
        setNotes(notes.filter(note => note._id !== id));
      } catch (error) {
        console.error('Failed to delete note:', error);
      }
    }
  };

  const handleEditNote = (note: Note) => {
    setEditingNote(note);
    setIsModalOpen(true);
  };

  const handleNewNote = () => {
    setEditingNote(null);
    setIsModalOpen(true);
  };

  if (loading) {
    return <div className="loading">Loading your notes...</div>;
  }

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="header-content">
          <h1>My Notes</h1>
          <div className="header-actions">
            <span className="user-welcome">Welcome back, {user?.name}!</span>
            <button onClick={handleNewNote} className="new-note-btn">
              + New Note
            </button>
            <button onClick={logout} className="logout-btn">
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="dashboard-main">
        {notes.length === 0 ? (
          <div className="empty-state">
            <h2>No notes yet</h2>
            <p>Create your first note to get started!</p>
            <button onClick={handleNewNote} className="create-first-note-btn">
              Create Your First Note
            </button>
          </div>
        ) : (
          <div className="notes-grid">
            {notes.map(note => (
              <NoteCard
                key={note._id}
                note={note}
                onEdit={handleEditNote}
                onDelete={handleDeleteNote}
              />
            ))}
          </div>
        )}
      </main>

      {isModalOpen && (
        <NoteModal
          note={editingNote}
          onSave={editingNote ? handleUpdateNote : handleCreateNote}
          onClose={() => {
            setIsModalOpen(false);
            setEditingNote(null);
          }}
        />
      )}
    </div>
  );
};

export default Dashboard;
