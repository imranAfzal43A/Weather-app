import { Appbar } from 'react-native-paper';

const MyAppBar = (props) => (
  <Appbar.Header style={{backgroundColor:'#34ebab'}}>
    <Appbar.Content title={props.title} />
  </Appbar.Header>
);

export default MyAppBar;