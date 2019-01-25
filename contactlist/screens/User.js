import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import ContactThumbnail from '../components/ContactThumbnail';
import colors from '../utils/colors';
import { fetchUserContact } from '../utils/api';
import store from '../store';

const keyExtractor = ({ phone }) => phone;

export default class Options extends Component {
  static navigationOptions = ({ navigation: { navigate } }) => ({
    title: 'Me',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: colors.blue,
    },
    headerLeft: (
      <MaterialIcons 
        name="menu"
        size={24}
        style={{ color: colors.black, marginLeft: 10 }}
        onPress={() => navigate('DrawerToggle')}
      />
    ),
    headerRight: (
      <MaterialIcons 
        name="settings"
        size={24}
        style={{ color: 'white', marginLeft: 10 }}
        onPress={() => navigate('Options')}
      />
    ),
  });




  constructor(props) {
    super(props);

    this.state = {
      user: store.getState().user,
      loading: store.getState().isFetchingUser,
      error: store.getState().error,
    };
  }

  async componentDidMount() {
    try {
      this.unsubscribe = store.onChange(() => {
        this.setState({
          contacts: store.getState().user,
          loading: store.getState().isFetchingContacts,
          error: store.getState().user,
        });
      });

      const user = await fetchUserContact();
      store.setState({ user, isFetchingUser: false });
    } catch (e) {
      this.setState({
        loading: false,
        error: true,
      });
    }
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { loading, user, error } = this.state;
    const { avatar, name, phone } = user;
    return (
      <View style={styles.container}>
        {loading && <ActivityIndicator size="large" />}
        {error && <Text>Error...</Text>}
        {!loading && (
          <ContactThumbnail avatar={avatar} name={name} phone={phone} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blue,
  },
});