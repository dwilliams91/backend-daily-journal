import React, { useContext, useState } from "react";
import { EntryContext } from "./EntryProvider";

export const Entry = ({ entry, moods, hashtags }) => {
  
  const hashtag=hashtags.find(m=>{
    // console.log("m.id", m.id)
    // console.log("hashtag.id", entry.hashtag_id)
    return m.id===parseInt(entry.hashtag_id)})
  // console.log(hashtag)
  const mood = moods.find(m => m.id === entry.mood_id)
  const { deleteEntry, getEntryById } = useContext(EntryContext)

  return (

    <section className="entry">
      <div className="entry__concept">{entry.concept}</div>
      <div className="entry__entry">{entry.entry}</div>
      <div className="entry__date">{entry.date}</div>
      <div className="entry__mood">{mood.mood}</div>
      <div className="entry__hashtag">{hashtag.tag}</div>


      <button onClick={
        () => {
          deleteEntry(entry)
        }
      }>Delete</button>
      <button onClick={
        () => {
          getEntryById(entry.id)
        }
      }>Edit</button>
    </section>
  )
};
