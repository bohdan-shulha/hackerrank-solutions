(defn diagonal-sum [arr]
    (reduce + (map-indexed (fn [i a] (nth a i)) arr))
)

(defn diagonal-reversed [arr]
    (map-indexed (fn [i a] (nth (reverse a) i)) arr)
)

(defn diagonalDifference [arr]
    (Math/abs (reduce - (diagonal-sum arr) (diagonal-reversed arr)))
)

; Standard boilerplate
(def fptr (get (System/getenv) "OUTPUT_PATH"))

(def n (Integer/parseInt (clojure.string/trim (read-line))))

(def arr [])

(doseq [_ (range n)]
    (def arr (conj arr (vec (map #(Integer/parseInt %) (clojure.string/split (clojure.string/trimr (read-line)) #" ")))))
)

(def result (diagonalDifference arr))

(spit fptr (str result "\n") :append true)
