import './Impacts.css'

export default function Impact({ impact, errors }) {
  if (errors === undefined) return null

  return (
    <div className="impact">
      {Object.values(errors).map(({ description, help, helpUrl, nodes }) => (
        <div className="impact__error-group error-group">
          <div className="error-group__title-wrapper">
            <p className="error-group__title">{help}</p>
            <p className="error-group__impact">
              <div className={`error-group__impact-circle ${impact}`}></div>
              Importance: {impact}
            </p>
          </div>
          <p className="error-group__description">{description}</p>
          <p className="error-group__linked">
            You can read more about the error&nbsp;
            <a
              className="error-group__link"
              target={'_blank'}
              href={helpUrl}
              rel="noreferrer"
              aria-label="Read more about this error"
            >
              here
            </a>
          </p>

          <ul className="impact__error-list error-list">
            {nodes.map((node) => (
              <Error {...node} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

function Error({ html, selector, screenshots }) {
  return (
    <li className="error">
      <div className="error__wrapper-img">
        {screenshots !== 'not-screen' && (
          <img
            src={`data:image/png;base64,${screenshots}`}
            width={100}
            height={80}
            className="error__img"
            alt=""
          />
        )}
      </div>
      <div>
        <p>
          <b>HTML</b>: {html}
        </p>
        <p>
          <b>Selector</b>: {selector}
        </p>
      </div>
    </li>
  )
}
