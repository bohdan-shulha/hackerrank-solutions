(defn birthdayCakeCandles [ar]
    (def max-num (apply max ar))
    (count (filter #(= % max-num) ar))
)

; Standard boilerplate
(def fptr (get (System/getenv) "OUTPUT_PATH"))

(def ar-count (Integer/parseInt (clojure.string/trim (read-line))))

(def ar (vec (map #(Integer/parseInt %) (clojure.string/split (read-line) #" "))))

(def result (birthdayCakeCandles ar))

(spit fptr (str result "\n") :append true)
