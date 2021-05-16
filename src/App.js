import Header from './components/layout/Header'
import Content from './components/layout/Content'
import {ProjectsProvider, SelectedProjectProvider} from './context'

export const App = () => {
  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <div>
          <Header/>
          <Content/>
        </div>
      </ProjectsProvider>
    </SelectedProjectProvider>
    
  );
}

export default App;
