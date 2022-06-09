import './Form.css';
import { useHooks } from './hooks';

export default function Form() {
  const { url, handleChange, handleSubmit } = useHooks();

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form__label" htmlFor="site-analyze">Provide a link to the site</label>
      <div className="form__wrapper-input">
        <input
          className="form__input"
          type="text"
          id="site-analyze"
          value={url}
          onChange={handleChange}
          required
          aria-required
        />
        <button className="form__button" type="submit">
          Analyze
        </button>
      </div>
    </form>
  );
}
