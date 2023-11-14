import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchQuotes} from '../actions/quote_action';
import {ScrollView} from 'react-native-virtualized-view';

export default function Quote() {
  // Accessing quotes data from the Redux store
  const quotesData = useSelector(state => state.quoteReducer.quotes);

  // Dispatch function to trigger the fetchQuotes action
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuotes());
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainSubContainer}>
        <Text style={styles.headerTitle}>Quotes - Keep The Fire On</Text>
        {quotesData.length > 0 && (
          <ScrollView>
            <FlatList
              keyExtractor={item => item.id}
              data={quotesData}
              renderItem={({item}) => (
                <View style={styles.cardContainer}>
                  <Text style={styles.quoteTitle}>{item.quote}</Text>
                  <Text style={styles.quoteAuthor}>{item.author}</Text>
                </View>
              )}
            />
          </ScrollView>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#f1f1f1',
  },
  mainSubContainer: {
    marginHorizontal: 10,
    marginVertical: 15,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6750A4',
    marginBottom: 10,
  },
  cardContainer: {
    backgroundColor: '#f1f1f1',
    padding: 10,
    margin: 10,
    borderRadius: 6,
    elevation: 3,
  },
  quoteTitle: {
    fontSize: 18,
    color: '#454343',
  },
  quoteAuthor: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'right',
    color: '#6750A4',
  },
});
