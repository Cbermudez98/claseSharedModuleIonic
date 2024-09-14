type FirebaseOperator = "==" | "!=" | ">" | "<" | "<=" | ">=";

export interface IFirebaseQuery {
  field: string;
  value: string;
  collection: string;
  condition: FirebaseOperator;
}

