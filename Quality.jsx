import './Quality.css';
const Quality = () => {
  return (
    <div className="quality-page">
      <h1>Check the quality of your paper</h1>
      <p>Use the form below to upload your research files.</p>
      <form>
        <input type="file" name="file" />
        <button type="submit">check the quality</button>
      </form>
    </div>
  );
};

export default Quality;