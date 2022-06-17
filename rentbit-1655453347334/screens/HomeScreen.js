import React from 'react';
import * as ExamplePropertiesApi from '../apis/ExamplePropertiesApi.js';
import {
  Divider,
  Icon,
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

const HomeScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors.background }}
      hasSafeArea={false}
      scrollable={true}
      hasTopSafeArea={true}
    >
      <Text style={[styles.TextrQ, { color: theme.colors.strong }]}>
        {'Popular Rentals'}
      </Text>

      <ExamplePropertiesApi.FetchListOfPropertiesGET method={'GET'} limit={12}>
        {({ loading, error, data, refetchListOfProperties }) => {
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
            <FlatList
              data={fetchData}
              listKey={'5zwT8apG'}
              keyExtractor={({ item }) => item?.id || item?.uuid || item}
              renderItem={({ item }) => {
                const listData = item;
                return (
                  <>
                    <View
                      style={[
                        styles.ViewYZ,
                        {
                          backgroundColor: theme.colors.surface,
                          borderRadius: 8,
                          borderColor: theme.colors.divider,
                        },
                      ]}
                    >
                      <Touchable
                        onPress={() => {
                          try {
                            navigation.navigate('ScreenStack', {
                              screen: 'PropertyDetailScreen',
                              params: { id: listData?.id },
                            });
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                      >
                        <View style={styles.ViewUa}>
                          <ImageBackground
                            style={[
                              styles.ImageBackgroundio,
                              { borderRadius: theme.roundness },
                            ]}
                            resizeMode={'cover'}
                            source={{ uri: `${listData?.image_url}` }}
                          >
                            <View style={styles.Viewie}>
                              <View
                                style={[
                                  styles.ViewJK,
                                  {
                                    backgroundColor: theme.colors.primary,
                                    borderBottomLeftRadius: 8,
                                    borderTopLeftRadius: 8,
                                  },
                                ]}
                              >
                                <Text
                                  style={[
                                    styles.TexttV,
                                    { color: theme.colors.surface },
                                  ]}
                                  allowFontScaling={true}
                                  ellipsizeMode={'tail'}
                                  textBreakStrategy={'highQuality'}
                                >
                                  {'$'}
                                  {listData?.nightly_price}
                                </Text>

                                <Text
                                  style={[
                                    styles.TextVu,
                                    { color: theme.colors.surface },
                                  ]}
                                  allowFontScaling={true}
                                  ellipsizeMode={'tail'}
                                  textBreakStrategy={'highQuality'}
                                >
                                  {'/night'}
                                </Text>
                              </View>
                            </View>
                          </ImageBackground>
                        </View>

                        <View style={styles.ViewxK}>
                          <View>
                            <Text
                              style={[
                                styles.TextUM,
                                { color: theme.colors.strong },
                              ]}
                              textBreakStrategy={'highQuality'}
                              ellipsizeMode={'tail'}
                              allowFontScaling={true}
                              numberOfLines={2}
                            >
                              {listData?.name}
                            </Text>
                            <Spacer top={4} right={8} bottom={4} left={8} />
                            <Text
                              style={[
                                styles.Textmq,
                                { color: theme.colors.medium },
                              ]}
                              ellipsizeMode={'tail'}
                              numberOfLines={2}
                            >
                              {listData?.description}
                            </Text>
                            <Divider
                              style={styles.Divider_6G}
                              color={theme.colors.divider}
                            />
                            <View style={styles.Viewxk}>
                              <View style={styles.ViewDO}>
                                <Icon
                                  name={'MaterialCommunityIcons/bed-king'}
                                  size={24}
                                  color={theme.colors.primary}
                                />
                                <Spacer right={2} left={2} />
                                <Text
                                  style={[
                                    styles.TextuQ,
                                    { color: theme.colors.medium },
                                  ]}
                                >
                                  {listData?.beds}
                                  {' beds'}
                                </Text>
                              </View>
                              <Spacer top={8} right={8} bottom={8} left={8} />
                              <View style={styles.Viewxm}>
                                <Icon
                                  name={'MaterialIcons/bathtub'}
                                  size={20}
                                  color={theme.colors.primary}
                                />
                                <Spacer right={2} left={2} />
                                <Text
                                  style={[
                                    styles.TextIy,
                                    { color: theme.colors.medium },
                                  ]}
                                >
                                  {listData?.bathrooms}
                                  {' baths'}
                                </Text>
                              </View>
                              <Spacer top={8} right={8} bottom={8} left={8} />
                              <View style={styles.View_0h}>
                                <Icon
                                  name={'MaterialIcons/group'}
                                  size={24}
                                  color={theme.colors.primary}
                                />
                                <Spacer right={2} left={2} />
                                <Text
                                  style={[
                                    styles.TextaH,
                                    { color: theme.colors.medium },
                                  ]}
                                >
                                  {listData?.maxGuests}
                                  {' guests'}
                                </Text>
                              </View>
                            </View>
                          </View>
                        </View>
                      </Touchable>
                    </View>
                    <Spacer top={12} right={8} bottom={12} left={8} />
                  </>
                );
              }}
              contentContainerStyle={styles.FlatList_5zContent}
            />
          );
        }}
      </ExamplePropertiesApi.FetchListOfPropertiesGET>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextrQ: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 26,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
  },
  TexttV: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
  },
  TextVu: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 10,
  },
  ViewJK: {
    paddingLeft: 8,
    paddingTop: 4,
    paddingRight: 8,
    paddingBottom: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewie: {
    alignItems: 'flex-end',
    marginTop: 16,
  },
  ImageBackgroundio: {
    width: '100%',
    height: '100%',
  },
  ViewUa: {
    height: 240,
  },
  TextUM: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 18,
  },
  Textmq: {
    lineHeight: 24,
  },
  Divider_6G: {
    height: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  TextuQ: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
  },
  ViewDO: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextIy: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
  },
  Viewxm: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextaH: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
  },
  View_0h: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewxk: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  ViewxK: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },
  ViewYZ: {
    overflow: 'hidden',
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  FlatList_5zContent: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },
});

export default withTheme(HomeScreen);
