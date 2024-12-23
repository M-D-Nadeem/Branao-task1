import { useState } from 'react';
import { MoreHorizontal, Eye, Share2, Calendar, MapPin, Briefcase } from 'lucide-react';

const PostCard = ({ post }) => {
  const renderMetaContent = () => {
    if (post.date && post.location) {
      return (
        <div className="flex gap-4 mt-2 text-gray-500">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" /> {post.date}
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" /> {post.location}
          </div>
        </div>
      );
    } else if (post.company && post.location) {
      return (
        <div className="flex gap-4 mt-2 text-gray-500">
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4" /> {post.company}
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" /> {post.location}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-lg shadow mb-4 overflow-hidden">
      {post.image && (
        <img src="/api/placeholder/800/400" className="w-full h-48 object-cover" alt={post.title} />
      )}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-5 h-5 bg-gray-200 rounded-sm"></div>
          <span className="text-gray-500">{post.category}</span>
        </div>
        
        <div className="flex justify-between items-start gap-3">
          <h5 className="text-xl font-medium m-0">{post.title}</h5>
          <div className="relative group">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
        </div>

        {renderMetaContent()}
        
        {post.cta && (
          <div className="mt-3">
            <button className="w-full py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50">
              {post.cta}
            </button>
          </div>
        )}

        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
            <span className="font-medium">{post.author}</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4 text-gray-500" />
              <span className="text-gray-500">{post.views} views</span>
            </div>
            <button className="flex items-center gap-2 py-1 px-3 bg-gray-100 rounded-lg hover:bg-gray-200">
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard