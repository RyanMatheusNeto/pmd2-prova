import {  GluestackUIProvider} from '@gluestack-ui/themed';
import { Home } from './src/home';

export default function App() {
  return (
    <GluestackUIProvider>
      <Home />
    </GluestackUIProvider>
  );
}


