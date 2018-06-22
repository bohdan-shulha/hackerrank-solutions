(defn solve [a b]
    (do 
        (def a-score (atom 0))
        (def b-score (atom 0))
                
        (dotimes [i 3] 
            (let [ai (nth a i) 
                  bi (nth b i)] 
                (cond 
                    (> ai bi) (swap! a-score inc)
                    (< ai bi) (swap! b-score inc)
                )))
        [@a-score @b-score]))
