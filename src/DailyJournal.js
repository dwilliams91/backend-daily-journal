import React from "react";
import { EntryProvider } from "./components/EntryProvider";
import { EntryForm } from "./components/EntryForm";
import { EntryList } from "./components/EntryList";
import { MoodProvider } from "./components/mood/MoodProvider";
import { HashTagProvider } from "./components/hashtag/HashtagProvider";

export const DailyJournal = () => {
  return (
    <div className="DailyJournal">
      <EntryProvider>
        <MoodProvider >
          <HashTagProvider>
          <EntryForm />
          <EntryList />
          </HashTagProvider>
        </MoodProvider>
      </EntryProvider>
    </div>
  );
};
