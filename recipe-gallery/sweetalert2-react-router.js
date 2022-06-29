const HistoryRouter = ReactRouterDOM.unstable_HistoryRouter;
const { Routes, Route, Link } = ReactRouterDOM;
const { createBrowserHistory } = HistoryLibrary
const withReactContent = window.sweetalert2ReactContent
const rootPath = '/recipe-gallery/sweetalert2-react-router-iframe.html'

const browserHistory = createBrowserHistory({ window });

const MySwal = withReactContent(Swal);

const Home = () => {
  const showSwalWithLink = () => {
    MySwal.fire({
      html: (
        <HistoryRouter history={browserHistory}>
          <Link to={`${rootPath}/about`} onClick={() => Swal.close()}>
            Navigate to /about
          </Link>
        </HistoryRouter>
      ),
    });
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={showSwalWithLink}>Show SweetAlert2 modal with Link inside</button>
    </div>
  );
};

const About = () => {
  return <h1>About</h1>;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HistoryRouter history={browserHistory}>
      <Link to={`${rootPath}/`}>Home</Link> {' | '}
      <Link to={`${rootPath}/about`}>About</Link>
      <Routes>
        <Route path={`${rootPath}/`} element={<Home />} />
        <Route path={`${rootPath}/about`} element={<About />} />
      </Routes>
    </HistoryRouter>
  </React.StrictMode>
);
