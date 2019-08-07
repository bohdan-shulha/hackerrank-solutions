(defn timeConversion [s]
    (def ampm (apply str (take-last 2 s)))
    (def hours (Integer/parseInt (apply str (take 2 s))))
    (def time-part (drop-last 2 (drop 2 s)))
    (defn make-time [hours] (concat (format "%02d" hours) time-part))
    (apply str (cond 
        (and (= hours 12) (= ampm "AM")) (make-time 0)
        (and (= hours 12) (= ampm "PM")) (make-time 12)
        (= ampm "PM") (make-time (+ 12 hours))
        :else (make-time hours)))
)

; Standard boilerplate
(def fptr (get (System/getenv) "OUTPUT_PATH"))

(def s (read-line))

(def result (timeConversion s))

(spit fptr (str result "\n") :append true)
