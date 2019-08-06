(defn plusMinus [arr]
    (loop [i (dec (count arr))
           positive 0
           negative 0
           zero 0]
        (if (< i 0) 
            (do
                (println (format "%.6f" (double (/ negative (count arr)))))
                (println (format "%.6f" (double (/ positive (count arr)))))
                (println (format "%.6f" (double (/ zero (count arr))))))
            (recur 
                (dec i)
                (if (> 0 (nth arr i))
                    (inc positive)
                    positive)
                (if (< 0 (nth arr i))
                    (inc negative)
                    negative)
                (if (= 0 (nth arr i))
                    (inc zero)
                    zero)))
    )
)

; Standard boilerplate
(def n (Integer/parseInt (clojure.string/trim (read-line))))

(def arr (vec (map #(Integer/parseInt %) (clojure.string/split (read-line) #" "))))

(plusMinus arr)
