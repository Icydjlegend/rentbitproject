import React from 'react';
import * as ExamplePropertiesApi from '../apis/ExamplePropertiesApi.js';
import {
  ButtonOutline,
  ButtonSolid,
  Divider,
  Icon,
  ScreenContainer,
  Spacer,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';
import {
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const PropertyDetailScreen = props => {
  const { theme } = props;

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={true}
      hasTopSafeArea={false}
    >
      <ExamplePropertiesApi.FetchIndividualPropertyGET
        method={'GET'}
        id={props.route?.params?.id ?? 2}
      >
        {({ loading, error, data, refetchIndividualProperty }) => {
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
              <View style={styles.ViewJg}>
                <ImageBackground
                  style={styles.ImageBackgroundtV}
                  source={{ uri: `${data && data['image_url']}` }}
                  resizeMode={'cover'}
                >
                  <View style={styles.ViewPE}>
                    <View
                      style={[
                        styles.ViewXI,
                        {
                          backgroundColor: theme.colors.primary,
                          borderRadius: 8,
                        },
                      ]}
                    >
                      <View style={styles.ViewKY}>
                        <Text
                          style={[
                            styles.Text_2j,
                            { color: theme.colors.surface },
                          ]}
                        >
                          {'Only $'}
                          {fetchData?.nightly_price}
                          {' per night'}
                        </Text>
                      </View>

                      <View>
                        <ButtonOutline
                          style={[
                            styles.ButtonOutlinezz,
                            {
                              borderColor: theme.colors.surface,
                              color: theme.colors.surface,
                            },
                          ]}
                          title={'BOOK'}
                        />
                      </View>
                    </View>
                  </View>
                </ImageBackground>
              </View>

              <View>
                <View style={styles.Viewno}>
                  <Text style={[styles.Textqd, { color: theme.colors.light }]}>
                    {fetchData?.city}
                  </Text>

                  <Text
                    style={[styles.TextTx, { color: theme.colors.strong }]}
                    textBreakStrategy={'highQuality'}
                    ellipsizeMode={'tail'}
                    allowFontScaling={true}
                    numberOfLines={2}
                  >
                    {fetchData?.name}
                  </Text>
                  <Spacer top={8} right={8} bottom={8} left={8} />
                  <View>
                    <View style={styles.Viewq3}>
                      <View
                        style={[
                          styles.ViewEi,
                          {
                            borderRadius: 8,
                            borderColor: theme.colors.lightest,
                          },
                        ]}
                      >
                        <Icon
                          name={'MaterialCommunityIcons/bed-king'}
                          size={24}
                          color={theme.colors.primary}
                        />
                        <Spacer right={2} left={2} />
                        <Text
                          style={[
                            styles.TextC2,
                            { color: theme.colors.medium },
                          ]}
                        >
                          {fetchData?.beds}
                          {' beds'}
                        </Text>
                      </View>
                      <Spacer top={8} right={6} bottom={8} left={6} />
                      <View
                        style={[
                          styles.ViewnA,
                          {
                            borderColor: theme.colors.lightest,
                            borderRadius: 8,
                          },
                        ]}
                      >
                        <Icon
                          name={'MaterialIcons/bathtub'}
                          size={20}
                          color={theme.colors.primary}
                        />
                        <Spacer right={2} left={2} />
                        <Text
                          style={[
                            styles.Textbg,
                            { color: theme.colors.medium },
                          ]}
                        >
                          {fetchData?.bathrooms}
                          {' baths'}
                        </Text>
                      </View>
                      <Spacer top={8} right={6} bottom={8} left={6} />
                      <View
                        style={[
                          styles.View_9v,
                          {
                            borderRadius: 8,
                            borderColor: theme.colors.lightest,
                          },
                        ]}
                      >
                        <Icon
                          name={'MaterialIcons/group'}
                          size={24}
                          color={theme.colors.primary}
                        />
                        <Spacer right={2} left={2} />
                        <Text
                          style={[
                            styles.TextXF,
                            { color: theme.colors.medium },
                          ]}
                        >
                          {fetchData?.maxGuests}
                          {' max'}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <Spacer top={12} right={8} bottom={12} left={8} />
                  <View>
                    <Text
                      style={[styles.TextwH, { color: theme.colors.strong }]}
                    >
                      {'Rates'}
                    </Text>
                    <Spacer top={6} right={8} bottom={6} left={8} />
                    <View style={styles.View_2k}>
                      <View style={styles.Viewbb}>
                        <Text
                          style={[
                            styles.TextnH,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Nightly'}
                        </Text>
                      </View>

                      <View style={styles.ViewEe}>
                        <Text
                          style={[
                            styles.Textms,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'$'}
                          {fetchData?.nightly_price}
                        </Text>
                      </View>
                    </View>
                    <Divider
                      style={styles.DividerfH}
                      color={theme.colors.lightest}
                    />
                    <View style={styles.ViewU9}>
                      <View style={styles.ViewWA}>
                        <Text
                          style={[
                            styles.TextA3,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Weekly'}
                        </Text>
                      </View>

                      <View style={styles.View_4V}>
                        <Text
                          style={[
                            styles.Textab,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'$'}
                          {fetchData?.weekly_price}
                        </Text>
                      </View>
                    </View>
                    <Divider
                      style={styles.DividerH9}
                      color={theme.colors.lightest}
                    />
                    <View style={styles.View_9e}>
                      <View style={styles.View_7V}>
                        <Text
                          style={[
                            styles.Texte6,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Monthly'}
                        </Text>
                      </View>

                      <View style={styles.ViewFh}>
                        <Text
                          style={[
                            styles.Textsn,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'$'}
                          {fetchData?.monthly_rental_price}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <Spacer top={12} right={8} bottom={12} left={8} />
                  <View>
                    <Text
                      style={[styles.Textw1, { color: theme.colors.strong }]}
                    >
                      {'Description'}
                    </Text>
                    <Spacer top={6} right={8} bottom={6} left={8} />
                    <Text
                      style={[styles.TextVI, { color: theme.colors.medium }]}
                    >
                      {fetchData?.description}
                    </Text>
                  </View>
                  <Spacer top={12} right={8} bottom={12} left={8} />
                  <View>
                    <Text
                      style={[styles.Text_9L, { color: theme.colors.strong }]}
                    >
                      {'More'}
                    </Text>
                    <Spacer top={6} right={8} bottom={6} left={8} />
                    <View style={styles.ViewwG}>
                      <View style={styles.View_7c}>
                        <Text
                          style={[
                            styles.TextkI,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Cancellation'}
                        </Text>
                      </View>

                      <View style={styles.ViewAn}>
                        <Text
                          style={[
                            styles.Textn9,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {fetchData?.cancellation_policy}
                        </Text>
                      </View>
                    </View>
                    <Divider
                      style={styles.DividerZN}
                      color={theme.colors.lightest}
                    />
                    <View style={styles.ViewAv}>
                      <View style={styles.ViewFZ}>
                        <Text
                          style={[
                            styles.TextbK,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Minimum stay'}
                        </Text>
                      </View>

                      <View style={styles.ViewV8}>
                        <>
                          {!fetchData?.min_stay ? null : (
                            <Text
                              style={[
                                styles.TextOa,
                                { color: theme.colors.strong },
                              ]}
                            >
                              {fetchData?.min_stay}
                            </Text>
                          )}
                        </>
                        <>
                          {fetchData?.min_stay ? null : (
                            <Text
                              style={[
                                styles.Textvi,
                                { color: theme.colors.strong },
                              ]}
                            >
                              {'No minimum'}
                            </Text>
                          )}
                        </>
                      </View>
                    </View>
                    <Divider
                      style={styles.DividerBp}
                      color={theme.colors.lightest}
                    />
                    <View style={styles.ViewGS}>
                      <View style={styles.ViewP5}>
                        <Text
                          style={[
                            styles.TextrY,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Cleaning fee'}
                        </Text>
                      </View>

                      <View style={styles.ViewkA}>
                        <Text
                          style={[
                            styles.TextAP,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {fetchData?.cleaning_fee}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <Spacer top={16} right={8} bottom={16} left={8} />
                  <View>
                    <ButtonSolid
                      onPress={async () => {
                        try {
                          await WebBrowser.openBrowserAsync(
                            `https://www.google.com/maps/@${fetchData?.latitude},${fetchData?.longitude},18z`
                          );
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={[
                        styles.ButtonSolid_63,
                        { backgroundColor: theme.colors.primary },
                      ]}
                      title={'View on Map'}
                    />
                  </View>
                  <Spacer top={12} right={8} bottom={12} left={8} />
                </View>
              </View>
            </>
          );
        }}
      </ExamplePropertiesApi.FetchIndividualPropertyGET>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Text_2j: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 16,
  },
  ViewKY: {
    flex: 1,
  },
  ButtonOutlinezz: {
    borderRadius: 8,
    fontFamily: 'Poppins_700Bold',
    borderWidth: 1,
    textAlign: 'center',
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
  },
  ViewXI: {
    paddingLeft: 12,
    paddingBottom: 6,
    paddingRight: 8,
    paddingTop: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewPE: {
    paddingLeft: 24,
    paddingTop: 24,
    paddingRight: 24,
    paddingBottom: 24,
  },
  ImageBackgroundtV: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  ViewJg: {
    width: '100%',
    height: 420,
  },
  Textqd: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
  },
  TextTx: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 22,
  },
  TextC2: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
  },
  ViewEi: {
    flexDirection: 'row',
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    paddingLeft: 8,
    paddingTop: 8,
    paddingRight: 8,
    paddingBottom: 8,
    justifyContent: 'center',
  },
  Textbg: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
  },
  ViewnA: {
    flexDirection: 'row',
    flex: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    paddingTop: 8,
    paddingRight: 8,
    paddingBottom: 8,
    paddingLeft: 8,
    justifyContent: 'center',
  },
  TextXF: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
  },
  View_9v: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingTop: 8,
    paddingRight: 8,
    paddingBottom: 8,
    paddingLeft: 8,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    justifyContent: 'center',
  },
  Viewq3: {
    flexDirection: 'row',
  },
  TextwH: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
  },
  TextnH: {
    fontFamily: 'Poppins_400Regular',
  },
  Viewbb: {
    flex: 1,
  },
  Textms: {
    fontFamily: 'Poppins_500Medium',
  },
  ViewEe: {
    flex: 1,
  },
  View_2k: {
    flexDirection: 'row',
  },
  DividerfH: {
    height: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  TextA3: {
    fontFamily: 'Poppins_400Regular',
  },
  ViewWA: {
    flex: 1,
  },
  Textab: {
    fontFamily: 'Poppins_500Medium',
  },
  View_4V: {
    flex: 1,
  },
  ViewU9: {
    flexDirection: 'row',
  },
  DividerH9: {
    height: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  Texte6: {
    fontFamily: 'Poppins_400Regular',
  },
  View_7V: {
    flex: 1,
  },
  Textsn: {
    fontFamily: 'Poppins_500Medium',
  },
  ViewFh: {
    flex: 1,
  },
  View_9e: {
    flexDirection: 'row',
  },
  Textw1: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
  },
  TextVI: {
    lineHeight: 26,
    fontFamily: 'Poppins_400Regular',
    textAlign: 'left',
    fontSize: 14,
  },
  Text_9L: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
  },
  TextkI: {
    fontFamily: 'Poppins_400Regular',
  },
  View_7c: {
    flex: 1,
  },
  Textn9: {
    fontFamily: 'Poppins_500Medium',
  },
  ViewAn: {
    flex: 1,
  },
  ViewwG: {
    flexDirection: 'row',
  },
  DividerZN: {
    height: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  TextbK: {
    fontFamily: 'Poppins_400Regular',
  },
  ViewFZ: {
    flex: 1,
  },
  TextOa: {
    fontFamily: 'Poppins_500Medium',
  },
  Textvi: {
    fontFamily: 'Poppins_500Medium',
  },
  ViewV8: {
    flex: 1,
  },
  ViewAv: {
    flexDirection: 'row',
  },
  DividerBp: {
    height: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  TextrY: {
    fontFamily: 'Poppins_400Regular',
  },
  ViewP5: {
    flex: 1,
  },
  TextAP: {
    fontFamily: 'Poppins_500Medium',
  },
  ViewkA: {
    flex: 1,
  },
  ViewGS: {
    flexDirection: 'row',
  },
  ButtonSolid_63: {
    borderRadius: 8,
    fontFamily: 'Poppins_600SemiBold',
    textAlign: 'center',
    paddingTop: 16,
    paddingBottom: 16,
  },
  Viewno: {
    paddingLeft: 24,
    paddingTop: 24,
    paddingRight: 24,
    paddingBottom: 24,
  },
});

export default withTheme(PropertyDetailScreen);
