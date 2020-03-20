import React, { useContext, createContext } from 'react';
import fact from './assets/fact.json';
import hotPost from './assets/hot-post.json';
import recentPost from './assets/recentPost.json';
import timelessPost from './assets/timelessPost.json';
import relatedPost from './assets/relatedPost.json';

const RecentPostContext = createContext();
const TimelessPostContext = createContext();
const HotPostContext = createContext();
const FactContext = createContext();
const RelatedPostContext = createContext();

function useRelatedPostContext() {
  let context = useContext(RelatedPostContext);
  if(context === undefined){
    throw new Error('useRelatedPostContext must be used within CricketAppContext');
  }
  return context;
}

function useRecentPostContext() {
  let context = useContext(RecentPostContext);
  if(context === undefined){
    throw new Error('useRecentPostContext must be used within CricketAppContext');
  }
  return context;
}

function useTimelessPostContext() {
  let context = useContext(TimelessPostContext);
  if(context === undefined){
    throw new Error('useTimelessPostContext must be used within CricketAppContext');
  }
  return context;
}

function useHotPostContext(){
  let context = useContext(HotPostContext);
  if(context === undefined){
    throw new Error('useHotPostContext must be used within CricketAppContext');
  }
  return context;
}

function useFactContext(){
  let context = useContext(FactContext);
  if(context === undefined){
    throw new Error('useFactContext must be used within CricketAppContext');
  }
  return context;
}

function CricketAppContext({children}) {
  return (
    <RecentPostContext.Provider value={recentPost.articles}>
      <TimelessPostContext.Provider value={timelessPost.articles}>
        <HotPostContext.Provider value={hotPost.hot_articles}>
          <FactContext.Provider value={fact.facts[0].content}>
            <RelatedPostContext.Provider value={relatedPost}>
              {children}
            </RelatedPostContext.Provider>
          </FactContext.Provider>
        </HotPostContext.Provider>
      </TimelessPostContext.Provider>
    </RecentPostContext.Provider>
  )
}

export {CricketAppContext, 
        useRecentPostContext, 
        useTimelessPostContext, 
        useHotPostContext,
        useFactContext,
        useRelatedPostContext}
