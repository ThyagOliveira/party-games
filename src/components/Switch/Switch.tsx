import "./Switch.module.scss";

export default function Switch() {
  return (
    <label className="switch">
      <input type="checkbox" />
      <span className="slider"></span>
    </label>
  );
}
