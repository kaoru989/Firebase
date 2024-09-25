import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const NotesScreen = () => {
  const [note, setNote] = useState('');
  const [notesList, setNotesList] = useState([]);

  const handleSaveNote = () => {
    if (note.trim()) {
      setNotesList([...notesList, note]);
      setNote('');
    }
  };

  return (
    <LinearGradient
      colors={['#6A82FB', '#FFC0CB']}
      style={styles.container}
    >
      <Text style={styles.headerText}>Your Notes</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Type your note here..."
        value={note}
        onChangeText={setNote}
        multiline
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveNote}>
        <Text style={styles.saveButtonText}>Save Note</Text>
      </TouchableOpacity>

      <ScrollView style={styles.notesContainer}>
        {notesList.map((item, index) => (
          <View key={index} style={styles.noteItem}>
            <Text style={styles.noteText}>{item}</Text>
          </View>
        ))}
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  textInput: {
    height: 100,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    color: '#000',
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: '#6A82FB',
    padding: 15,
    alignItems: 'center',
    borderRadius: 25,
    marginBottom: 20,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  notesContainer: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    padding: 10,
  },
  noteItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  noteText: {
    fontSize: 16,
    color: '#000',
  },
});

export default NotesScreen;
