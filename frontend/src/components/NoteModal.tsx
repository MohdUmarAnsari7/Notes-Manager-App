import React, { useState, useEffect } from 'react';
import { Note } from '../types';

interface NoteModalProps {
  note?: Note | null;
  onSave: (id: string, title: string, description: string) => Promise<void> | ((title: string, description: string) => Promise<void>);
  onClose: () => void;
}

const NoteModal: React.FC<NoteModalProps> = ({ note, onSave, onClose }) => {
  const [title, setTitle] = useState(note?.title || '');
  const [description, setDescription] = useState(note?.description || '');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setDescription(note.description);
    } else {
      setTitle('');
      setDescription('');
    }
  }, [note]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim() || !description.trim()) {
      setError('Please fill in both title and description');
      return;
    }

    setLoading(true);
    setError('');

    try {
      if (note) {
        await (onSave as (id: string, title: string, description: string) => Promise<void>)(
          note._id, 
          title.trim(), 
          description.trim()
        );
      } else {
        await (onSave as (title: string, description: string) => Promise<void>)(
          title.trim(), 
          description.trim()
        );
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleBackdropClick}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>{note ? 'Edit Note' : 'Create New Note'}</h2>
          <button onClick={onClose} className="close-btn">×</button>
        </div>
        
        <form onSubmit={handleSubmit} className="note-form">
          <div className="form-group">
            <input
              type="text"
              placeholder="Note title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="title-input"
              autoFocus
            />
          </div>
          
          <div className="form-group">
            <textarea
              placeholder="Write your note here..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="description-textarea"
              rows={8}
            />
          </div>

          {error && <div className="error-message">{error}</div>}
          
          <div className="modal-actions">
            <button type="button" onClick={onClose} className="cancel-btn">
              Cancel
            </button>
            <button type="submit" disabled={loading} className="save-btn">
              {loading ? 'Saving...' : (note ? 'Update' : 'Create')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NoteModal;
