class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.string :text, nil: false
      t.belongs_to :card

      t.timestamps
    end
  end
end
