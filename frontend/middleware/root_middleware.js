import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import SpotsMiddleware from './spots_middleware';
import BookingsMiddleware from './bookings_middleware';
import FilterMiddleware from './filter_middleware';
import ReviewsMiddleware from './reviews_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  SpotsMiddleware,
  BookingsMiddleware,
  FilterMiddleware,
  ReviewsMiddleware,
);

export default RootMiddleware;
