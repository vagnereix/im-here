import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 4,
    backgroundColor: '#1f1f1f',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  name: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    marginLeft: 16,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 4,
    backgroundColor: '#e23c44',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
});
