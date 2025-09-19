import React from 'react';
import { Note } from '../types';

interface NoteCardProps {
  note: Note;
  onEdit: (note: Note) => void;
  onDelete: (id: string) => void;
}

const NoteCard: React.FC<NoteCardProps> = ({ note, onEdit, onDelete }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <div className="note-card">
      <div className="note-header">
        <h3 className="note-title">{truncateText(note.title, 50)}</h3>
        <div className="note-actions">
          <button 
            onClick={() => onEdit(note)} 
            className="edit-btn"
            title="Edit note"
          >
            ✏️
          </button>
          <button 
            onClick={() => onDelete(note._id)} 
            className="delete-btn"
            title="Delete note"
          >
            🗑️
          </button>
        </div>
      </div>
      
      <div className="note-content">
        <p className="note-description">
          {truncateText(note.description, 150)}
        </p>
      </div>
      
      <div className="note-footer">
        <span className="note-date">
          {formatDate(note.updatedAt)}
        </span>
      </div>
    </div>
  );
};

export default NoteCard;
