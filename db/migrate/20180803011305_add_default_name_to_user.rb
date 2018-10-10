class AddDefaultNameToUser < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :name, :string, :default => 'anonymous'
  end
end
