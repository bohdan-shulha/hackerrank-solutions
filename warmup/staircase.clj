; Complete the staircase function below.
(defn staircase [n]
    (dotimes [i n]
        (println (apply str (concat
            (repeat (dec (- n i)) " ")
            (repeat (inc i) "#")))))
)

; Standard boilerplate
(def n (Integer/parseInt (clojure.string/trim (read-line))))

(staircase n)
