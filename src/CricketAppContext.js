import React, { useContext, createContext } from 'react';
import useApi from './useApi';

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

function CricketAppContext({children, ...rest}) {
  console.log('context app rendering');
  let [recentPost] = useApi('/recent-post');
  let [timelessPost] = useApi('/timeless-post');
  let [hotPost] = useApi('/hot-post');
  let [fact] = useApi('/fact');
  console.log('rest :', rest);
  recentPost = recentPost.map((item) => item.post);
  timelessPost = timelessPost.map((item) => item.post);
  hotPost = hotPost.map((item) => item.post);

  return (
    <RecentPostContext.Provider value={recentPost}>
      <TimelessPostContext.Provider value={timelessPost}>
        <HotPostContext.Provider value={hotPost}>
          <FactContext.Provider value={fact}>
            <RelatedPostContext.Provider value={recentPost.slice(0, 6)}>
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
