export default function TaskItem({ task, onDelete }) {
  return (
    <li>
      <p>{task.text}</p>
      <button className="delete-btn" onClick={() => onDelete(task.id)}>
        Удалить
      </button>
    </li>
  );
}
