import React, { useState, useEffect, useRef } from 'react';

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  StatusBar,
  Platform,
  Animated,
  TextInput,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function ServiceHomepage() {
  const [selectedService, setSelectedService] = useState('All');
  const [searchText, setSearchText] = useState('');
  const [activeTab, setActiveTab] = useState('home');
  const [notifications] = useState([
    { id: 1, message: "New booking from Sarah J.", time: "2 min ago", type: "booking" },
    { id: 2, message: "Payment received ₹1,250", time: "15 min ago", type: "payment" },  
    { id: 3, message: "5-star review received!", time: "1 hour ago", type: "review" }
  ]);

  // Animation values for popular services
  const shimmerAnimation = useRef(new Animated.Value(0)).current;
  const pulseAnimation = useRef(new Animated.Value(1)).current;
  const canteenAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Shimmer animation
    const shimmer = Animated.loop(
      Animated.sequence([
        Animated.timing(shimmerAnimation, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: false,
        }),
        Animated.timing(shimmerAnimation, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: false,
        }),
      ])
    );

    // Pulse animation for popular badge
    const pulse = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnimation, {
          toValue: 1.1,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnimation, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
      ])
    );

    // Canteen floating animation
    const canteenFloat = Animated.loop(
      Animated.sequence([
        Animated.timing(canteenAnimation, {
          toValue: 1,
          duration: 3000,
          useNativeDriver: true,
        }),
        Animated.timing(canteenAnimation, {
          toValue: 0,
          duration: 3000,
          useNativeDriver: true,
        }),
      ])
    );

    shimmer.start();
    pulse.start();
    canteenFloat.start();

    return () => {
      shimmer.stop();
      pulse.stop();
      canteenFloat.stop();
    };
  }, []);

  const services = [
    { id: 1, name: 'Cooking', icon: 'restaurant-outline', color: '#6366F1', active: 45 },
    { id: 2, name: 'Salon', icon: 'cut-outline', color: '#8B5CF6', active: 32 },
    { id: 3, name: 'Tailoring', icon: 'shirt-outline', color: '#06B6D4', active: 28 },
    { id: 4, name: 'Cleaning', icon: 'home-outline', color: '#10B981', active: 19 },
    { id: 5, name: 'Plumbing', icon: 'build-outline', color: '#F59E0B', active: 15 },
    { id: 6, name: 'Tutoring', icon: 'book-outline', color: '#EF4444', active: 12 }
  ];

  // Popular services data with additional metrics
  const popularServices = [
    { 
      id: 1, 
      name: 'Premium Hair Styling', 
      icon: 'cut-outline', 
      color: '#8B5CF6', 
      bookings: 156,
      rating: 4.9,
      price: '₹899',
      growth: '+23%',
      category: 'Beauty',
      trending: true
    },
    { 
      id: 2, 
      name: 'Gourmet Cooking', 
      icon: 'restaurant-outline', 
      color: '#6366F1', 
      bookings: 142,
      rating: 4.8,
      price: '₹1,299',
      growth: '+18%',
      category: 'Food',
      trending: true
    },
    { 
      id: 3, 
      name: 'Designer Tailoring', 
      icon: 'shirt-outline', 
      color: '#06B6D4', 
      bookings: 98,
      rating: 4.7,
      price: '₹2,199',
      growth: '+31%',
      category: 'Fashion',
      trending: false
    },
    { 
      id: 4, 
      name: 'Deep Home Cleaning', 
      icon: 'home-outline', 
      color: '#10B981', 
      bookings: 87,
      rating: 4.6,
      price: '₹649',
      growth: '+12%',
      category: 'Home',
      trending: true
    },
    { 
      id: 5, 
      name: 'Expert Plumbing', 
      icon: 'build-outline', 
      color: '#F59E0B', 
      bookings: 76,
      rating: 4.5,
      price: '₹599',
      growth: '+8%',
      category: 'Maintenance',
      trending: false
    }
  ];

  // Canteen data
  const canteenItems = [
    {
      id: 1,
      name: 'Daily Tiffin Box',
      description: 'Homestyle meals delivered fresh',
      price: '₹120/day',
      rating: 4.8,
      image: '🍛',
      popular: true,
      discount: '20% OFF'
    },
    {
      id: 2,
      name: 'Breakfast Special',
      description: 'Start your day right',
      price: '₹80',
      rating: 4.7,
      image: '🥞',
      popular: false,
      discount: null
    },
    {
      id: 3,
      name: 'Lunch Combo',
      description: '3 course meal with dessert',
      price: '₹150',
      rating: 4.9,
      image: '🍽️',
      popular: true,
      discount: '15% OFF'
    }
  ];

  const currentOrders = [
    { id: 1, customer: "Priya Sharma", service: "Hair Styling", time: "10:30 AM", status: "In Progress", avatar: "👩‍🦱" },
    { id: 2, customer: "Raj Kumar", service: "Home Cooking", time: "11:00 AM", status: "Confirmed", avatar: "👨‍🍳" },
    { id: 3, customer: "Anita Desai", service: "Dress Stitching", time: "2:00 PM", status: "Pending", avatar: "👗" }
  ];

  const analytics = {
    todayEarnings: "₹3,450",
    weeklyEarnings: "₹24,300",
    totalCustomers: "156",
    avgRating: "4.8",
    completedOrders: "23",
    pendingOrders: "5"
  };

  const recentReviews = [
    { id: 1, customer: "Meera Singh", rating: 5, comment: "Excellent cooking service! Will book again.", service: "Cooking" },
    { id: 2, customer: "Rohit Gupta", rating: 4, comment: "Good haircut, very professional.", service: "Salon" },
    { id: 3, customer: "Kavya Nair", rating: 5, comment: "Perfect tailoring work. Highly recommended!", service: "Tailoring" }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Ionicons
        key={i}
        name={i < Math.floor(rating) ? "star" : "star-outline"}
        size={14}
        color="#FBBF24"
      />
    ));
  };

  const shimmerTranslateX = shimmerAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, 100],
  });

  const canteenFloatY = canteenAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -5],
  });

  type FooterTabProps = {
    icon: keyof typeof Ionicons.glyphMap;
    label: string;
    isActive: boolean;
    onPress: () => void;
  };

  const FooterTab: React.FC<FooterTabProps> = ({ icon, label, isActive, onPress }) => (
    <TouchableOpacity 
      style={[styles.footerTab, isActive && styles.activeFooterTab]} 
      onPress={onPress}
    >
      <Ionicons 
        name={icon} 
        size={24} 
        color={isActive ? '#6366F1' : '#9CA3AF'} 
      />
      <Text style={[styles.footerTabText, isActive && styles.activeFooterTabText]}>
        {label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Modern Header */}
      <View style={styles.headerContainer}>
        <View style={styles.headerContent}>
          <View style={styles.userInfo}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>AK</Text>
            </View>
            <View style={styles.userTextContainer}>
              <Text style={styles.greeting}>Good Morning</Text>
              <Text style={styles.userName}>Amit Kumar</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.notificationButton}>
            <View style={styles.notificationIcon}>
              <Ionicons name="notifications-outline" size={22} color="#6B7280" />
              <View style={styles.notificationBadge}>
                <Text style={styles.badgeText}>3</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Ionicons name="search-outline" size={20} color="#9CA3AF" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search services, food, or anything..."
            value={searchText}
            onChangeText={setSearchText}
            placeholderTextColor="#9CA3AF"
          />
          {searchText.length > 0 && (
            <TouchableOpacity onPress={() => setSearchText('')}>
              <Ionicons name="close-circle" size={20} color="#9CA3AF" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <ScrollView 
        style={styles.content} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >

        {/* Most Popular Services - NEW ANIMATED SECTION */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.popularTitleContainer}>
              <Text style={styles.sectionTitle}>Most Popular Services</Text>
              <Animated.View style={[styles.trendingBadge, { transform: [{ scale: pulseAnimation }] }]}>
                <Ionicons name="trending-up-outline" size={14} color="#FFFFFF" />
                <Text style={styles.trendingText}>Trending</Text>
              </Animated.View>
            </View>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>
          
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false} 
            contentContainerStyle={styles.popularServicesContainer}
          >
            {popularServices.map((service, index) => (
              <TouchableOpacity key={service.id} style={styles.popularServiceCard}>
                {/* Animated background shimmer */}
                <View style={styles.shimmerContainer}>
                  <Animated.View 
                    style={[
                      styles.shimmerOverlay,
                      {
                        transform: [{ translateX: shimmerTranslateX }],
                      }
                    ]} 
                  />
                </View>
                
                {/* Trending indicator */}
                {service.trending && (
                  <View style={styles.trendingIndicator}>
                    <Ionicons name="flash" size={12} color="#FF6B6B" />
                  </View>
                )}
                
                {/* Service content */}
                <View style={[styles.popularServiceIcon, { backgroundColor: service.color + '15' }]}>
                  <Ionicons name={service.icon as keyof typeof Ionicons.glyphMap} size={32} color={service.color} />
                </View>
                
                <View style={styles.popularServiceInfo}>
                  <Text style={styles.popularServiceName}>{service.name}</Text>
                  <Text style={styles.popularServiceCategory}>{service.category}</Text>
                  
                  <View style={styles.popularServiceMetrics}>
                    <View style={styles.metricRow}>
                      <View style={styles.ratingContainer}>
                        <Ionicons name="star" size={14} color="#FBBF24" />
                        <Text style={styles.ratingText}>{service.rating}</Text>
                      </View>
                      <Text style={styles.bookingsText}>{service.bookings} bookings</Text>
                    </View>
                    
                    <View style={styles.priceRow}>
                      <Text style={styles.priceText}>{service.price}</Text>
                      <View style={styles.growthContainer}>
                        <Text style={styles.growthText}>{service.growth}</Text>
                        <Ionicons name="arrow-up-outline" size={12} color="#10B981" />
                      </View>
                    </View>
                  </View>
                </View>
                
                {/* Gradient overlay for depth */}
                <LinearGradient
                  colors={['transparent', 'rgba(255,255,255,0.1)']}
                  style={styles.cardGradient}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Services Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Services</Text>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false} 
            contentContainerStyle={styles.servicesContainer}
          >
            {services.map((service) => (
              <TouchableOpacity key={service.id} style={styles.serviceCard}>
                <View style={[styles.serviceIcon, { backgroundColor: service.color + '15' }]}>
                  <Ionicons name={service.icon as any} size={28} color={service.color} />
                </View>
                <Text style={styles.serviceName}>{service.name}</Text>
                <Text style={styles.serviceActive}>{service.active} Active</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Canteen Section */}
        <View style={styles.section}>
          <LinearGradient
            colors={['#FFF7ED', '#FFEDD5', '#FED7AA']}
            style={styles.canteenBackground}
          >
            <View style={styles.canteenHeader}>
              <View style={styles.canteenTitleContainer}>
                <Animated.Text 
                  style={[
                    styles.canteenTitle,
                    { transform: [{ translateY: canteenFloatY }] }
                  ]}
                >
                  🍽️ Fresh Canteen
                </Animated.Text>
                <Text style={styles.canteenSubtitle}>Delicious tiffin boxes delivered daily</Text>
              </View>
              <View style={styles.canteenBadge}>
                <Ionicons name="time-outline" size={14} color="#EA580C" />
                <Text style={styles.canteenBadgeText}>Hot & Fresh</Text>
              </View>
            </View>

            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false} 
              contentContainerStyle={styles.canteenItemsContainer}
            >
              {canteenItems.map((item) => (
                <Animated.View 
                  key={item.id}
                  style={[
                    styles.canteenCard,
                    { transform: [{ translateY: canteenFloatY }] }
                  ]}
                >
                  {item.popular && (
                    <View style={styles.popularBadge}>
                      <Text style={styles.popularBadgeText}>Popular</Text>
                    </View>
                  )}
                  
                  {item.discount && (
                    <View style={styles.discountBadge}>
                      <Text style={styles.discountText}>{item.discount}</Text>
                    </View>
                  )}

                  <Text style={styles.canteenItemImage}>{item.image}</Text>
                  
                  <View style={styles.canteenItemInfo}>
                    <Text style={styles.canteenItemName}>{item.name}</Text>
                    <Text style={styles.canteenItemDescription}>{item.description}</Text>
                    
                    <View style={styles.canteenItemFooter}>
                      <View style={styles.canteenPriceContainer}>
                        <Text style={styles.canteenItemPrice}>{item.price}</Text>
                        <View style={styles.canteenRating}>
                          <Ionicons name="star" size={12} color="#FBBF24" />
                          <Text style={styles.canteenRatingText}>{item.rating}</Text>
                        </View>
                      </View>
                      
                      <TouchableOpacity style={styles.addButton}>
                        <Ionicons name="add" size={18} color="#FFFFFF" />
                      </TouchableOpacity>
                    </View>
                  </View>

                  <LinearGradient
                    colors={['rgba(255,255,255,0.1)', 'rgba(255,165,0,0.1)']}
                    style={styles.canteenCardGradient}
                  />
                </Animated.View>
              ))}
            </ScrollView>

            <View style={styles.canteenCTA}>
              <TouchableOpacity style={styles.viewMenuButton}>
                <Text style={styles.viewMenuText}>View Full Menu</Text>
                <Ionicons name="arrow-forward" size={16} color="#EA580C" />
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>

      </ScrollView>

      {/* Footer Navigation */}
      <View style={styles.footerContainer}>
        <LinearGradient
          colors={['rgba(255,255,255,0.95)', '#FFFFFF']}
          style={styles.footerGradient}
        >
          <View style={styles.footerContent}>
            <FooterTab
              icon="home-outline"
              label="Home"
              isActive={activeTab === 'home'}
              onPress={() => setActiveTab('home')}
            />
            <FooterTab
              icon="restaurant-outline"
              label="Canteen"
              isActive={activeTab === 'canteen'}
              onPress={() => setActiveTab('canteen')}
            />
            <FooterTab
              icon="list-outline"
              label="Services"
              isActive={activeTab === 'services'}
              onPress={() => setActiveTab('services')}
            />
            <FooterTab
              icon="person-outline"
              label="Account"
              isActive={activeTab === 'account'}
              onPress={() => setActiveTab('account')}
            />
          </View>
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  headerContainer: {
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS === 'ios' ? 60 : 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#6366F1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  userTextContainer: {
    flex: 1,
  },
  greeting: {
    color: '#9CA3AF',
    fontSize: 14,
    fontWeight: '400',
  },
  userName: {
    color: '#111827',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 2,
  },
  notificationButton: {
    padding: 13,
    margin: -20
  },
  notificationIcon: {
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: -6,
    right: -5,
    backgroundColor: '#EF4444',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '600',
  },
  
  // Search Bar Styles
  searchContainer: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#111827',
    fontWeight: '400',
  },

  content: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 100,
  },
  
  section: {
    marginBottom: 32,
  },
  lastSection: {
    marginBottom: 0,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
  },
  viewAllText: {
    color: '#6366F1',
    fontSize: 14,
    fontWeight: '600',
  },
  
  // Popular Services Styles - NEW
  popularTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  trendingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF6B6B',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginLeft: 12,
  },
  trendingText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '600',
    marginLeft: 4,
  },
  popularServicesContainer: {
    paddingTop: 16,
    paddingRight: 20,
  },
  popularServiceCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginRight: 16,
    width: 280,
    position: 'relative',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.8)',
  },
  shimmerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
  },
  shimmerOverlay: {
    position: 'absolute',
    top: 0,
    left: -100,
    right: 100,
    bottom: 0,
    backgroundColor: 'rgba(255,255,255,0.3)',
    transform: [{ skewX: '-20deg' }],
    width: 50,
  },
  trendingIndicator: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#FFF5F5',
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  popularServiceIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  popularServiceInfo: {
    flex: 1,
  },
  popularServiceName: {
    color: '#111827',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  popularServiceCategory: {
    color: '#6B7280',
    fontSize: 13,
    fontWeight: '500',
    marginBottom: 16,
  },
  popularServiceMetrics: {
    marginTop: 8,
  },
  metricRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    color: '#111827',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 4,
  },
  bookingsText: {
    color: '#6B7280',
    fontSize: 12,
    fontWeight: '500',
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceText: {
    color: '#111827',
    fontSize: 20,
    fontWeight: '700',
  },
  growthContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0FDF4',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  growthText: {
    color: '#10B981',
    fontSize: 12,
    fontWeight: '600',
    marginRight: 4,
  },
  cardGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 40,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },

  // Services styles
  servicesContainer: {
    paddingTop: 16,
    paddingRight: 20,
  },
  serviceCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginRight: 16,
    width: 140,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  serviceIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  serviceName: {
    color: '#111827',
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 4,
    textAlign: 'center',
  },
  serviceActive: {
    color: '#6B7280',
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },

  // Canteen Styles
  canteenBackground: {
    borderRadius: 20,
    padding: 20,
    marginHorizontal: -20,
    marginTop: 10,
  },
  canteenHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  canteenTitleContainer: {
    flex: 1,
  },
  canteenTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#C2410C',
    marginBottom: 4,
  },
  canteenSubtitle: {
    fontSize: 14,
    color: '#9A3412',
    fontWeight: '500',
  },
  canteenBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FED7AA',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#FDBA74',
  },
  canteenBadgeText: {
    color: '#EA580C',
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 6,
  },
  canteenItemsContainer: {
    paddingRight: 20,
    marginBottom: 20,
  },
  canteenCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginRight: 16,
    width: 200,
    position: 'relative',
    overflow: 'hidden',
    shadowColor: '#EA580C',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
    borderWidth: 1,
    borderColor: '#FED7AA',
  },
  popularBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#DC2626',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    zIndex: 10,
  },
  popularBadgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '700',
  },
  discountBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#059669',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    zIndex: 10,
  },
  discountText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '700',
  },
  canteenItemImage: {
    fontSize: 48,
    textAlign: 'center',
    marginBottom: 12,
  },
  canteenItemInfo: {
    flex: 1,
  },
  canteenItemName: {
    color: '#111827',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 6,
  },
  canteenItemDescription: {
    color: '#6B7280',
    fontSize: 12,
    fontWeight: '500',
    marginBottom: 16,
    lineHeight: 16,
  },
  canteenItemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  canteenPriceContainer: {
    flex: 1,
  },
  canteenItemPrice: {
    color: '#EA580C',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  canteenRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  canteenRatingText: {
    color: '#6B7280',
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 4,
  },
  addButton: {
    backgroundColor: '#EA580C',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#EA580C',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  canteenCardGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 30,
  },
  canteenCTA: {
    alignItems: 'center',
  },
  viewMenuButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    shadowColor: '#EA580C',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 2,
    borderColor: '#FDBA74',
  },
  viewMenuText: {
    color: '#EA580C',
    fontSize: 14,
    fontWeight: '700',
    marginRight: 8,
  },

  // Footer Styles
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
  footerGradient: {
    paddingBottom: Platform.OS === 'ios' ? 34 : 20,
  },
  footerContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 8,
  },
  footerTab: {
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 12,
    minWidth: 70,
  },
  activeFooterTab: {
    backgroundColor: '#EEF2FF',
  },
  footerTabText: {
    color: '#9CA3AF',
    fontSize: 12,
    fontWeight: '500',
    marginTop: 4,
  },
  activeFooterTabText: {
    color: '#6366F1',
    fontWeight: '600',
  },
});