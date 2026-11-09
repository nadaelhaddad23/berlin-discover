import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.cityLabel}>Tonight in Berlin</Text>
            <Text style={styles.appTitle}>Roami.</Text>
            <Text style={styles.appSubtitle}>What's happening around you</Text>
          </View>
          <View style={styles.liveBadge}>
            <Text style={styles.liveText}>● LIVE</Text>
          </View>
        </View>
      </View>

      {/* Tabs */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabs}>
        {['All', '🎧 DJ & Clubs', '🍜 Eat', '☕ Cafés', '🏙️ Rooftop'].map((tab, i) => (
          <View key={tab} style={[styles.tab, i === 0 && styles.tabActive]}>
            <Text style={[styles.tabText, i === 0 && styles.tabTextActive]}>{tab}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Happening Now */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Happening now</Text>
          <Text style={styles.sectionLink}>See map →</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.nowCard}>
            <View style={styles.nowCardTop}>
              <Text style={[styles.nowType, { color: '#ff5a7e' }]}>DJ SET</Text>
              <Text style={styles.nowBusy}>🔴 Busy</Text>
            </View>
            <Text style={styles.nowName}>Berghain Kantine</Text>
            <Text style={styles.nowDetail}>Friedrichshain · Since 20:00</Text>
            <View style={styles.nowTag}><Text style={styles.nowTagText}>Techno</Text></View>
          </View>
          <View style={styles.nowCard}>
            <View style={styles.nowCardTop}>
              <Text style={[styles.nowType, { color: '#ff9d5a' }]}>RESTAURANT</Text>
              <Text style={styles.nowBusy}>🟡 ~20 min</Text>
            </View>
            <Text style={styles.nowName}>Lon Men's Noodle</Text>
            <Text style={styles.nowDetail}>Mitte · Worth it ✦</Text>
            <View style={styles.nowTag}><Text style={styles.nowTagText}>Taiwanese</Text></View>
          </View>
          <View style={styles.nowCard}>
            <View style={styles.nowCardTop}>
              <Text style={[styles.nowType, { color: '#5ae8ff' }]}>CAFÉ</Text>
              <Text style={styles.nowBusy}>🟢 Quiet</Text>
            </View>
            <Text style={styles.nowName}>Concierge Coffee</Text>
            <Text style={styles.nowDetail}>Mitte · Laptop ok</Text>
            <View style={styles.nowTag}><Text style={styles.nowTagText}>Study-friendly</Text></View>
          </View>
        </ScrollView>
      </View>

      {/* Starting Soon */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Starting soon</Text>
          <Text style={styles.sectionLink}>All events →</Text>
        </View>
        {[
          { time: '23:00', name: 'Tresor — Surgeon B2B', venue: 'Mitte · Tresor Club', genre: 'Techno', price: '€15' },
          { time: '00:30', name: 'Rooftop Sunset Sessions', venue: 'Neukölln · Klunkerkranich', genre: 'House', price: 'Free' },
        ].map((event) => (
          <View key={event.name} style={styles.eventCard}>
            <View style={styles.eventTimeBox}>
              <Text style={styles.eventTime}>{event.time}</Text>
            </View>
            <View style={styles.eventInfo}>
              <Text style={styles.eventName}>{event.name}</Text>
              <Text style={styles.eventVenue}>{event.venue}</Text>
              <View style={styles.eventTags}>
                <View style={styles.etagGenre}><Text style={styles.etagGenreText}>{event.genre}</Text></View>
                <View style={styles.etagPrice}><Text style={styles.etagPriceText}>{event.price}</Text></View>
              </View>
            </View>
          </View>
        ))}
      </View>

      {/* Eat & Drink */}
      <View style={[styles.section, { marginBottom: 40 }]}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Eat & drink</Text>
          <Text style={styles.sectionLink}>See all →</Text>
        </View>
        {[
          { name: 'Nobelhart & Schmutzig', area: 'Kreuzberg · Fine dining', rating: '4.8', wait: '~35 min', price: '€€€€' },
          { name: "Mustafa's Gemüse Kebap", area: 'Kreuzberg · Street food', rating: '4.9', wait: '~45 min', price: '€' },
        ].map((place) => (
          <View key={place.name} style={styles.placeCard}>
            <View style={styles.placeTop}>
              <View>
                <Text style={styles.placeName}>{place.name}</Text>
                <Text style={styles.placeArea}>{place.area}</Text>
              </View>
              <Text style={styles.placeRating}>★ {place.rating}</Text>
            </View>
            <View style={styles.placeTags}>
              <View style={styles.worthTag}><Text style={styles.worthTagText}>✦ Worth it</Text></View>
              <View style={styles.ptag}><Text style={styles.ptagText}>Date spot</Text></View>
            </View>
            <View style={styles.placeMeta}>
              <Text style={styles.metaText}>⏱ {place.wait}</Text>
              <Text style={styles.metaText}>{place.price}</Text>
            </View>
          </View>
        ))}
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0a0a0f' },
  header: { padding: 20, paddingTop: 60 },
  headerTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  cityLabel: { fontSize: 11, letterSpacing: 2, color: 'rgba(240,240,245,0.45)', textTransform: 'uppercase' },
  appTitle: { fontSize: 36, fontWeight: '700', color: '#f0f0f5', letterSpacing: -1, marginTop: 4 },
  appSubtitle: { fontSize: 13, color: 'rgba(240,240,245,0.45)', marginTop: 4 },
  liveBadge: { backgroundColor: '#e8ff5a', borderRadius: 20, paddingHorizontal: 10, paddingVertical: 4 },
  liveText: { fontSize: 10, fontWeight: '700', color: '#0a0a0f', letterSpacing: 1 },
  tabs: { paddingHorizontal: 20, marginBottom: 8 },
  tab: { paddingHorizontal: 16, paddingVertical: 8, borderRadius: 10, marginRight: 8, backgroundColor: 'transparent' },
  tabActive: { backgroundColor: '#e8ff5a' },
  tabText: { fontSize: 13, fontWeight: '500', color: 'rgba(240,240,245,0.45)' },
  tabTextActive: { color: '#0a0a0f' },
  section: { paddingHorizontal: 20, marginTop: 24 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 },
  sectionTitle: { fontSize: 16, fontWeight: '600', color: '#f0f0f5' },
  sectionLink: { fontSize: 12, color: '#e8ff5a' },
  nowCard: { width: 160, backgroundColor: '#13131a', borderRadius: 16, padding: 14, marginRight: 10, borderWidth: 1, borderColor: 'rgba(255,255,255,0.08)' },
  nowCardTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  nowType: { fontSize: 10, fontWeight: '600', letterSpacing: 1 },
  nowBusy: { fontSize: 10, color: 'rgba(240,240,245,0.45)' },
  nowName: { fontSize: 14, fontWeight: '600', color: '#f0f0f5', marginBottom: 4 },
  nowDetail: { fontSize: 11, color: 'rgba(240,240,245,0.45)' },
  nowTag: { marginTop: 8, backgroundColor: 'rgba(232,255,90,0.12)', borderRadius: 8, paddingHorizontal: 8, paddingVertical: 3, alignSelf: 'flex-start' },
  nowTagText: { fontSize: 10, color: '#e8ff5a' },
  eventCard: { backgroundColor: '#13131a', borderRadius: 16, padding: 14, marginBottom: 10, flexDirection: 'row', alignItems: 'center', gap: 14, borderWidth: 1, borderColor: 'rgba(255,255,255,0.08)' },
  eventTimeBox: { minWidth: 44, alignItems: 'center' },
  eventTime: { fontSize: 16, fontWeight: '700', color: '#e8ff5a' },
  eventInfo: { flex: 1 },
  eventName: { fontSize: 14, fontWeight: '600', color: '#f0f0f5', marginBottom: 2 },
  eventVenue: { fontSize: 12, color: 'rgba(240,240,245,0.45)' },
  eventTags: { flexDirection: 'row', gap: 5, marginTop: 6 },
  etagGenre: { backgroundColor: 'rgba(232,255,90,0.1)', borderRadius: 6, paddingHorizontal: 7, paddingVertical: 2 },
  etagGenreText: { fontSize: 10, color: '#e8ff5a' },
  etagPrice: { backgroundColor: 'rgba(255,255,255,0.07)', borderRadius: 6, paddingHorizontal: 7, paddingVertical: 2 },
  etagPriceText: { fontSize: 10, color: 'rgba(240,240,245,0.45)' },
  placeCard: { backgroundColor: '#13131a', borderRadius: 16, padding: 16, marginBottom: 10, borderWidth: 1, borderColor: 'rgba(255,255,255,0.08)' },
  placeTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  placeName: { fontSize: 14, fontWeight: '600', color: '#f0f0f5' },
  placeArea: { fontSize: 11, color: 'rgba(240,240,245,0.45)', marginTop: 2 },
  placeRating: { fontSize: 13, fontWeight: '600', color: '#e8ff5a' },
  placeTags: { flexDirection: 'row', gap: 5, marginTop: 8 },
  worthTag: { backgroundColor: 'rgba(232,255,90,0.12)', borderRadius: 8, paddingHorizontal: 8, paddingVertical: 3 },
  worthTagText: { fontSize: 10, color: '#e8ff5a' },
  ptag: { backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: 8, paddingHorizontal: 8, paddingVertical: 3 },
  ptagText: { fontSize: 10, color: 'rgba(240,240,245,0.45)' },
  placeMeta: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, paddingTop: 10, borderTopWidth: 1, borderTopColor: 'rgba(255,255,255,0.08)' },
  metaText: { fontSize: 11, color: 'rgba(240,240,245,0.45)' },
});