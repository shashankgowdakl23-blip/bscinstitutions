import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import VirtualList from './virtual-list';
import OptimizedImage from './optimized-image';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
  date: string;
}

interface OptimizedTestimonialsProps {
  testimonials: Testimonial[];
  className?: string;
  maxHeight?: number;
  showFilters?: boolean;
}

const OptimizedTestimonials: React.FC<OptimizedTestimonialsProps> = ({
  testimonials,
  className = '',
  maxHeight = 600,
  showFilters = true,
}) => {
  const [filter, setFilter] = useState<'all' | '5-star' | 'recent'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter and search testimonials
  const filteredTestimonials = useMemo(() => {
    let filtered = testimonials;

    // Apply rating filter
    if (filter === '5-star') {
      filtered = filtered.filter(t => t.rating === 5);
    } else if (filter === 'recent') {
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      filtered = filtered.filter(t => new Date(t.date) > thirtyDaysAgo);
    }

    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(t => 
        t.name.toLowerCase().includes(term) ||
        t.content.toLowerCase().includes(term) ||
        t.company.toLowerCase().includes(term)
      );
    }

    return filtered;
  }, [testimonials, filter, searchTerm]);

  // Render individual testimonial
  const renderTestimonial = (testimonial: Testimonial, index: number) => (
    <motion.div
      key={testimonial.id}
      className="bg-white rounded-lg shadow-sm border p-6 mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <div className="flex items-start space-x-4">
        {/* Avatar */}
        <div className="flex-shrink-0">
          {testimonial.image ? (
            <OptimizedImage
              src={testimonial.image}
              alt={testimonial.name}
              width={48}
              height={48}
              className="w-12 h-12 rounded-full object-cover"
              sizes="48px"
            />
          ) : (
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">
                {testimonial.name.charAt(0)}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Quote icon */}
          <Quote className="w-4 h-4 text-gray-400 mb-2" />
          
          {/* Rating */}
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < testimonial.rating
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Content */}
          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            "{testimonial.content}"
          </p>

          {/* Author info */}
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-gray-900 text-sm">
                {testimonial.name}
              </h4>
              <p className="text-gray-500 text-xs">
                {testimonial.role} at {testimonial.company}
              </p>
            </div>
            <span className="text-gray-400 text-xs">
              {new Date(testimonial.date).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className={className}>
      {/* Filters */}
      {showFilters && (
        <div className="mb-6 space-y-4">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search testimonials..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          {/* Filter buttons */}
          <div className="flex space-x-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              aria-label="Show all testimonials"
            >
              All ({testimonials.length})
            </button>
            <button
              onClick={() => setFilter('5-star')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === '5-star'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              aria-label="Show only 5-star testimonials"
            >
              5-Star ({testimonials.filter(t => t.rating === 5).length})
            </button>
            <button
              onClick={() => setFilter('recent')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === 'recent'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              aria-label="Show recent testimonials"
            >
              Recent
            </button>
          </div>
        </div>
      )}

      {/* Results count */}
      <div className="mb-4">
        <p className="text-sm text-gray-600">
          Showing {filteredTestimonials.length} of {testimonials.length} testimonials
        </p>
      </div>

      {/* Virtual list */}
      {filteredTestimonials.length > 0 ? (
        <VirtualList
          items={filteredTestimonials}
          height={maxHeight}
          itemHeight={200} // Approximate height of each testimonial
          renderItem={renderTestimonial}
          overscan={3}
          className="border rounded-lg p-4"
        />
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">No testimonials found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default OptimizedTestimonials; 