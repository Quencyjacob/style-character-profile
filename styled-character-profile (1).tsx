import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Scroll, User, Briefcase, Heart, Star, BookOpen } from 'lucide-react';

// Mock character generator function (you'd integrate this with the Python code)
const generateCharacter = () => ({
  name: "Alex Thompson",
  gender: "neutral",
  birth_date: "5/15/1989",
  occupation: "Software Developer",
  hobbies: ["Rock climbing", "Photography", "Meditation"],
  personality_traits: ["analytical", "creative", "determined"],
  significant_life_events: [
    "studied abroad in Japan",
    "made a groundbreaking discovery in marine biology",
    "led a humanitarian mission in Southeast Asia"
  ]
});

export default function CharacterProfile() {
  const [character, setCharacter] = useState(generateCharacter());

  const regenerateCharacter = () => {
    setCharacter(generateCharacter());
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Card className="bg-stone-50 shadow-lg">
        <CardHeader>
          <CardTitle className="text-center font-serif text-3xl" style={{ fontFamily: "Rockwell, Georgia, serif" }}>
            Character Profile
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Name Section */}
          <div className="flex items-center space-x-3">
            <User className="text-indigo-600" />
            <h2 className="text-2xl font-serif" style={{ fontFamily: "Rockwell, Georgia, serif" }}>
              {character.name}
            </h2>
          </div>

          {/* Occupation Section */}
          <div className="flex items-center space-x-3">
            <Briefcase className="text-indigo-600" />
            <p className="text-lg font-serif" style={{ fontFamily: "Rockwell, Georgia, serif" }}>
              {character.occupation}
            </p>
          </div>

          {/* Hobbies Section */}
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <Heart className="text-indigo-600" />
              <h3 className="text-lg font-serif" style={{ fontFamily: "Rockwell, Georgia, serif" }}>
                Hobbies
              </h3>
            </div>
            <ul className="list-disc list-inside ml-8 font-serif" style={{ fontFamily: "Rockwell, Georgia, serif" }}>
              {character.hobbies.map((hobby, index) => (
                <li key={index} className="text-gray-700">{hobby}</li>
              ))}
            </ul>
          </div>

          {/* Personality Traits Section */}
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <Star className="text-indigo-600" />
              <h3 className="text-lg font-serif" style={{ fontFamily: "Rockwell, Georgia, serif" }}>
                Personality Traits
              </h3>
            </div>
            <div className="flex flex-wrap gap-2 ml-8">
              {character.personality_traits.map((trait, index) => (
                <span 
                  key={index}
                  className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full font-serif"
                  style={{ fontFamily: "Rockwell, Georgia, serif" }}
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>

          {/* Life Events Section */}
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <BookOpen className="text-indigo-600" />
              <h3 className="text-lg font-serif" style={{ fontFamily: "Rockwell, Georgia, serif" }}>
                Significant Life Events
              </h3>
            </div>
            <ul className="space-y-2 ml-8">
              {character.significant_life_events.map((event, index) => (
                <li 
                  key={index}
                  className="flex items-start space-x-2 font-serif"
                  style={{ fontFamily: "Rockwell, Georgia, serif" }}
                >
                  <Scroll className="text-indigo-600 mt-1 h-4 w-4 flex-shrink-0" />
                  <span className="text-gray-700">{event}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      <div className="mt-6 text-center">
        <Button 
          onClick={regenerateCharacter}
          className="bg-indigo-600 hover:bg-indigo-700 font-serif"
          style={{ fontFamily: "Rockwell, Georgia, serif" }}
        >
          Generate New Character
        </Button>
      </div>
    </div>
  );
}
