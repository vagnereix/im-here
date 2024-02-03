import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingBottom: 0,
    backgroundColor: '#131016',
  },
  name: {
    marginTop: 24,
    color: '#deded3',
    fontSize: 24,
    fontWeight: 'bold',
  },
  date: {
    color: '#6b6b6b',
    fontSize: 16,
  },
  input: {
    flex: 1,
    padding: 16,
    borderRadius: 4,
    backgroundColor: '#1f1f1f',
    color: '#deded3',
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 4,
    backgroundColor: '#31cf67',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
  form: {
    marginTop: 24,
    marginBottom: 36,
    gap: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  emptyText: {
    color: '#deded3',
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 24,
  },
});
