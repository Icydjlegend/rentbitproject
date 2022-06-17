import { Alert } from 'react-native';

const showAlert = ({ title, message, buttonText }) => {
  return Alert.alert(title, message, [{ text: buttonText }]);
};

export default showAlert;
