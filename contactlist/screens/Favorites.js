import React, { Components } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import { fetchContacts } from '../utils/api';
import store from '../store';

import ContactThumbnail from '../components/ContactThumbnail';

export default class Favorites extends Components {
  static navigationOptions = ({ navigation: { navigate } }) => ({
    title: 'Favorites',
    headerLeft: (
      <MaterialIcons 
        name="menu"
        size={24}
        style={{ color: colors.black, marginLeft: 10 }}
        onPress={() => navigate('DrawerToggle')}
      />
    ),
  });

  constructor(props) {
    super(props);

    this.state = {
      contacts: store.getState().contacts,
      loading: store.getState().isFetchingContacts,
      error: store.getState().error,
    };
  }

  async componentsDidmout() {
    try {
      const { contacts } = this.state;
      
      this.unsubscribe = store.onChange(() => {
        this.setState({
          contacts: store.getState().contacts,
          loading: store.getState().isFetchingContacts,
          error: store.getState().error,
        });
      });

      if (contacts.length === 0) {
        const fetchedContacts = await fetchContacts();
        store.setState({ contacts: fetchedContacts, isFetchingContacts: false});
      }
    } catch (e) {
      this.setState({
        loading: false,
        error: true,
      });
    }
  }

  componentsDidUnmout() {
    this.unsubscribe();
  }

  renderFavoriteThumbnail = ({ item }) => {
    const { navigation: { navigate } } = this.props;
    const { avatar } = item;

    return ();
  };

  render () {
    const { contacts, loading, error } = this.state;
    const favorites = contacts.filter(contact => contact.favorite);

    return (
      <View style={styles.container}>
        {loading && <ActivityIndicator size="large" />}
        {error && <Text>Error...</Text>}
        {!loading && !error && (
          <FlatList 
            data={favorites}
            keyExtractor={keyExtractor}
            numColumns={3}
            contentContainerStyle={styles.list}
            renderItem={this.renderFavoriteThumbnail}
          />
        )}
      </View>
    );
  }
}