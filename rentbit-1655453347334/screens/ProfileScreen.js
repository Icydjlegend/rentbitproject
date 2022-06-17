import React from 'react';
import * as ExampleUserApi from '../apis/ExampleUserApi.js';
import { Circle, Icon, ScreenContainer, Spacer, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import { Fetch } from 'react-request';

const ProfileScreen = props => {
  const { theme } = props;

  return (
    <ScreenContainer
      style={styles.screen}
      scrollable={true}
      hasSafeArea={false}
      hasTopSafeArea={true}
    >
      <ExampleUserApi.FetchGetUserGET>
        {({ loading, error, data, refetchGetUser }) => {
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
              <View
                style={[
                  styles.ViewdD,
                  {
                    backgroundColor: theme.colors.surface,
                    borderRadius: 12,
                    borderColor: theme.colors.divider,
                  },
                ]}
              >
                <View>
                  <Circle size={84} bgColor={theme.colors.primary}>
                    <Image
                      style={styles.ImageLx}
                      source={{ uri: `${fetchData?.avatar}` }}
                      resizeMode={'cover'}
                    />
                  </Circle>
                </View>
                <Spacer top={8} right={8} bottom={8} left={8} />
                <View style={styles.Viewc8}>
                  <Text style={[styles.TextOo, { color: theme.colors.strong }]}>
                    {fetchData?.full_name}
                  </Text>
                  <Spacer top={3} right={8} bottom={3} left={8} />
                  <View style={styles.Viewwt}>
                    <View style={styles.Viewx4}>
                      <Icon
                        style={styles.IconVY}
                        name={'MaterialIcons/location-on'}
                        size={20}
                        color={theme.colors.primary}
                      />
                      <Text
                        style={[styles.TextWh, { color: theme.colors.light }]}
                      >
                        {fetchData?.city}
                        {', '}
                        {fetchData?.state}{' '}
                      </Text>
                    </View>
                    <Spacer top={8} right={8} bottom={8} left={8} />
                    <View style={styles.ViewWU}>
                      <Icon
                        style={styles.IconR7}
                        name={'MaterialIcons/alternate-email'}
                        size={20}
                        color={theme.colors.primary}
                      />
                      <Text
                        style={[styles.Textw5, { color: theme.colors.light }]}
                      >
                        {fetchData?.username}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <Spacer top={6} right={8} bottom={6} left={8} />
              <View
                style={[
                  styles.ViewyL,
                  {
                    backgroundColor: theme.colors.surface,
                    borderColor: theme.colors.divider,
                    borderRadius: 12,
                  },
                ]}
              >
                <Text style={[styles.Texte4, { color: theme.colors.primary }]}>
                  {'Bio'}
                </Text>
                <Spacer top={4} right={8} bottom={4} left={8} />
                <Text
                  style={[
                    theme.typography.body1,
                    styles.TextBT,
                    { color: theme.colors.medium },
                  ]}
                >
                  {fetchData?.bio}
                </Text>
              </View>
              <Spacer top={6} right={8} bottom={6} left={8} />
              <View
                style={[
                  styles.Viewcm,
                  {
                    backgroundColor: theme.colors.surface,
                    borderColor: theme.colors.divider,
                    borderRadius: 12,
                  },
                ]}
              >
                <Text style={[styles.TextJ0, { color: theme.colors.primary }]}>
                  {'More'}
                </Text>
                <Spacer top={4} right={8} bottom={4} left={8} />
                <View style={styles.Viewfu}>
                  <View style={styles.ViewQ0}>
                    <Text
                      style={[styles.TextrU, { color: theme.colors.strong }]}
                    >
                      {'University'}
                    </Text>
                  </View>

                  <View style={styles.View_24}>
                    <Text
                      style={[styles.TextKC, { color: theme.colors.medium }]}
                    >
                      {fetchData?.university}
                    </Text>
                  </View>
                </View>
                <Spacer top={4} right={8} bottom={4} left={8} />
                <View style={styles.View_4b}>
                  <View style={styles.ViewQT}>
                    <Text
                      style={[styles.Textbt, { color: theme.colors.strong }]}
                    >
                      {'Job Title'}
                    </Text>
                  </View>

                  <View style={styles.ViewaK}>
                    <Text
                      style={[styles.TextMf, { color: theme.colors.medium }]}
                    >
                      {fetchData?.job_title}
                    </Text>
                  </View>
                </View>
                <Spacer top={4} right={8} bottom={4} left={8} />
                <View style={styles.Viewi9}>
                  <View style={styles.ViewV5}>
                    <Text
                      style={[styles.TextUo, { color: theme.colors.strong }]}
                    >
                      {'Birthday'}
                    </Text>
                  </View>

                  <View style={styles.ViewVI}>
                    <Text
                      style={[styles.TextpM, { color: theme.colors.medium }]}
                    >
                      {fetchData?.birthdate}
                    </Text>
                  </View>
                </View>
              </View>
            </>
          );
        }}
      </ExampleUserApi.FetchGetUserGET>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImageLx: {
    width: 76,
    height: 76,
    alignSelf: 'center',
    borderRadius: 42,
  },
  TextOo: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 20,
  },
  IconVY: {
    width: 20,
    height: 20,
  },
  TextWh: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
  },
  Viewx4: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  IconR7: {
    width: 20,
    height: 20,
  },
  Textw5: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
  },
  ViewWU: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  Viewwt: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewc8: {
    flex: 1,
    justifyContent: 'center',
  },
  ViewdD: {
    paddingTop: 24,
    paddingBottom: 24,
    paddingRight: 24,
    paddingLeft: 24,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  Texte4: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 20,
  },
  TextBT: {
    fontFamily: 'Poppins_400Regular',
  },
  ViewyL: {
    paddingLeft: 24,
    paddingTop: 24,
    paddingRight: 24,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    paddingBottom: 24,
  },
  TextJ0: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 20,
  },
  TextrU: {
    fontFamily: 'Poppins_500Medium',
  },
  ViewQ0: {
    flex: 1,
  },
  TextKC: {
    fontFamily: 'Poppins_400Regular',
  },
  View_24: {
    flex: 2,
  },
  Viewfu: {
    flexDirection: 'row',
  },
  Textbt: {
    fontFamily: 'Poppins_500Medium',
  },
  ViewQT: {
    flex: 1,
  },
  TextMf: {
    fontFamily: 'Poppins_400Regular',
  },
  ViewaK: {
    flex: 2,
  },
  View_4b: {
    flexDirection: 'row',
  },
  TextUo: {
    fontFamily: 'Poppins_500Medium',
  },
  ViewV5: {
    flex: 1,
  },
  TextpM: {
    fontFamily: 'Poppins_400Regular',
  },
  ViewVI: {
    flex: 2,
  },
  Viewi9: {
    flexDirection: 'row',
  },
  Viewcm: {
    paddingLeft: 24,
    paddingTop: 24,
    paddingRight: 24,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    paddingBottom: 24,
  },
  FetchKB: {
    minHeight: 40,
  },
  screen: {
    paddingLeft: 16,
    paddingTop: 24,
    paddingRight: 16,
    paddingBottom: 24,
  },
});

export default withTheme(ProfileScreen);
