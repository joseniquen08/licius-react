import { AppRouter } from './routes/AppRouter';

function App() {
  return (
    <div className="h-full font-inter">
      <div className="h-full">
        {/* <SmoothScroll /> */}
        <AppRouter />
      </div>
    </div>
  );
}

export default App;