import React from 'react';
import * as ExampleSavedPropertiesApi from '../apis/ExampleSavedPropertiesApi.js';
import {
  ButtonSolid,
  ScreenContainer,
  Spacer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const SavedScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [showList, setShowList] = React.useState(false);

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors.background }}
      scrollable={true}
      hasSafeArea={false}
      hasTopSafeArea={true}
    >
      <Text style={[styles.Text_6i, { color: theme.colors.strong }]}>
        {'Saved Rentals'}
      </Text>

      <View style={styles.ViewF7}>
        <View
          style={[
            styles.ViewkB,
            {
              backgroundColor: theme.colors.divider,
              borderRadius: 14,
              borderColor: theme.colors.lightest,
            },
          ]}
        >
          <View style={styles.ViewRF}>
            <>
              {showList ? null : (
                <ButtonSolid
                  style={[
                    styles.ButtonSolidY9,
                    { backgroundColor: theme.colors.primary },
                  ]}
                  title={'Grid'}
                />
              )}
            </>
            <>
              {!showList ? null : (
                <ButtonSolid
                  onPress={() => {
                    try {
                      setShowList(false);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={[
                    styles.ButtonSolidsb,
                    {
                      backgroundColor: theme.colors.divider,
                      color: theme.colors.light,
                    },
                  ]}
                  title={'Grid'}
                />
              )}
            </>
          </View>

          <View style={styles.ViewmE}>
            <>
              {!showList ? null : (
                <ButtonSolid
                  style={[
                    styles.ButtonSolid_5b,
                    { backgroundColor: theme.colors.primary },
                  ]}
                  title={'List'}
                />
              )}
            </>
            <>
              {showList ? null : (
                <ButtonSolid
                  onPress={() => {
                    try {
                      setShowList(true);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={[
                    styles.ButtonSolidll,
                    {
                      backgroundColor: theme.colors.divider,
                      color: theme.colors.light,
                    },
                  ]}
                  title={'List'}
                />
              )}
            </>
          </View>
        </View>
      </View>

      <ExampleSavedPropertiesApi.FetchSavedPropertiesGET
        method={'GET'}
        limit={16}
      >
        {({ loading, error, data, refetchSavedProperties }) => {
          const fetchData = data;
          if (!fetchData || loading) {
            return <ActivityIndicator />;
          }

          if (error) {
            return (
              <Text style={{ textAlign: 'center' }}>
                There was a problem fetching this data
              </Text>
            );
          }

          return (
            <>
              <>
                {showList ? null : (
                  <FlatList
                    data={fetchData}
                    listKey={'9kP6I411'}
                    keyExtractor={({ item }) => item?.id || item?.uuid || item}
                    renderItem={({ item }) => {
                      const gridData = item;
                      return (
                        <View style={styles.ViewTO}>
                          <Touchable
                            onPress={() => {
                              try {
                                navigation.navigate('ScreenStack', {
                                  screen: 'PropertyDetailScreen',
                                  params: { id: gridData?.propertiesId },
                                });
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                          >
                            <View
                              style={[
                                styles.Viewbp,
                                {
                                  borderRadius: 12,
                                  borderColor: theme.colors.divider,
                                  backgroundColor: theme.colors.surface,
                                },
                              ]}
                            >
                              <View style={styles.Viewnh}>
                                <ImageBackground
                                  style={styles.ImageBackgroundW0}
                                  source={{
                                    uri: `${gridData?.properties?.image_url}`,
                                  }}
                                  resizeMode={'cover'}
                                />
                              </View>

                              <View style={styles.Viewon}>
                                <Text
                                  style={[
                                    styles.Text_28,
                                    { color: theme.colors.strong },
                                  ]}
                                  numberOfLines={1}
                                  ellipsizeMode={'tail'}
                                >
                                  {gridData?.properties?.name}{' '}
                                </Text>

                                <View style={styles.Viewm0}>
                                  <Text
                                    style={[
                                      styles.Text_1C,
                                      { color: theme.colors.primary },
                                    ]}
                                  >
                                    {'$'}
                                    {gridData?.properties?.nightly_price}
                                  </Text>

                                  <Text
                                    style={[
                                      styles.Textui,
                                      { color: theme.colors.primary },
                                    ]}
                                  >
                                    {'/night'}
                                  </Text>
                                </View>
                              </View>
                            </View>
                          </Touchable>
                        </View>
                      );
                    }}
                    contentContainerStyle={styles.FlatList_9kContent}
                    numColumns={2}
                  />
                )}
              </>
              <>
                {!showList ? null : (
                  <FlatList
                    data={fetchData}
                    listKey={'y1fbtw02'}
                    keyExtractor={({ item }) => item?.id || item?.uuid || item}
                    renderItem={({ item }) => {
                      const listData = item;
                      return (
                        <>
                          <View style={styles.ViewND}>
                            <Touchable
                              onPress={() => {
                                try {
                                  navigation.navigate('ScreenStack', {
                                    screen: 'PropertyDetailScreen',
                                    params: { id: listData?.propertiesId },
                                  });
                                } catch (err) {
                                  console.error(err);
                                }
                              }}
                            >
                              <View
                                style={[
                                  styles.ViewAH,
                                  {
                                    borderRadius: 12,
                                    borderColor: theme.colors.divider,
                                    backgroundColor: theme.colors.surface,
                                  },
                                ]}
                              >
                                <View style={styles.ViewWK}>
                                  <ImageBackground
                                    style={styles.ImageBackgroundAm}
                                    source={{
                                      uri: `${listData?.properties?.image_url}`,
                                    }}
                                    resizeMode={'cover'}
                                  />
                                </View>

                                <View style={styles.View_5m}>
                                  <Text
                                    style={[
                                      styles.Textxj,
                                      { color: theme.colors.light },
                                    ]}
                                  >
                                    {listData?.properties?.city}
                                  </Text>

                                  <Text
                                    style={[
                                      styles.TextNw,
                                      { color: theme.colors.strong },
                                    ]}
                                    numberOfLines={1}
                                    ellipsizeMode={'tail'}
                                  >
                                    {listData?.properties?.name}{' '}
                                  </Text>

                                  <View style={styles.Viewpk}>
                                    <Text
                                      style={[
                                        styles.Textdf,
                                        { color: theme.colors.primary },
                                      ]}
                                    >
                                      {'$'}
                                      {listData?.properties?.nightly_price}
                                    </Text>

                                    <Text
                                      style={[
                                        styles.TextA2,
                                        { color: theme.colors.primary },
                                      ]}
                                    >
                                      {'/night'}
                                    </Text>
                                  </View>
                                </View>
                              </View>
                            </Touchable>
                          </View>
                          <Spacer top={8} right={8} bottom={8} left={8} />
                        </>
                      );
                    }}
                    contentContainerStyle={styles.FlatListy1Content}
                  />
                )}
              </>
            </>
          );
        }}
      </ExampleSavedPropertiesApi.FetchSavedPropertiesGET>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Text_6i: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 26,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
  },
  ButtonSolidY9: {
    borderRadius: 12,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
  },
  ButtonSolidsb: {
    borderRadius: 12,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
  },
  ViewRF: {
    flex: 1,
  },
  ButtonSolid_5b: {
    borderRadius: 12,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
  },
  ButtonSolidll: {
    borderRadius: 12,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
  },
  ViewmE: {
    flex: 1,
  },
  ViewkB: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 2,
    paddingTop: 2,
    paddingRight: 2,
    paddingBottom: 2,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  ViewF7: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  ImageBackgroundW0: {
    width: '100%',
    height: '100%',
  },
  Viewnh: {
    height: 140,
  },
  Text_28: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 12,
  },
  Text_1C: {
    fontFamily: 'Poppins_600SemiBold',
  },
  Textui: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 10,
  },
  Viewm0: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewon: {
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 12,
    paddingBottom: 12,
    justifyContent: 'space-between',
    flex: 1,
  },
  Viewbp: {
    overflow: 'hidden',
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  ViewTO: {
    flex: 1,
    paddingLeft: 8,
    paddingTop: 8,
    paddingRight: 8,
    paddingBottom: 8,
  },
  FlatList_9kContent: {
    paddingLeft: 8,
    paddingTop: 8,
    paddingRight: 8,
    paddingBottom: 8,
  },
  ImageBackgroundAm: {
    width: '100%',
    height: '100%',
  },
  ViewWK: {
    flex: 1,
  },
  Textxj: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 10,
  },
  TextNw: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 14,
  },
  Textdf: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 14,
  },
  TextA2: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 10,
  },
  Viewpk: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  View_5m: {
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 12,
    paddingBottom: 12,
    flex: 3,
    justifyContent: 'center',
  },
  ViewAH: {
    flexDirection: 'row',
    overflow: 'hidden',
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  ViewND: {
    flex: 1,
  },
  FlatListy1Content: {
    paddingLeft: 16,
    paddingTop: 16,
    paddingRight: 16,
    paddingBottom: 16,
  },
});

export default withTheme(SavedScreen);
