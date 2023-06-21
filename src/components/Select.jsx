const Select = ({ blue, red, green, yellow }) => {
  return (
    <select>
      <option value={blue}>Blue</option>
      <option value={red}>Red</option>
      <option value={green}>Green</option>
      <option value={yellow}>Yellow</option>
    </select>
  );
};

export default Select;
