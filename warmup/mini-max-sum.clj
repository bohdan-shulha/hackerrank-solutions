(defn miniMaxSum [arr]
    (println 
        (reduce + (take 4 (sort arr)))
        (reduce + (take 4 (reverse (sort arr)))))
)

; Standard boilerplate
(def arr (vec (map #(Integer/parseInt %) (clojure.string/split (read-line) #" "))))

(miniMaxSum arr)
